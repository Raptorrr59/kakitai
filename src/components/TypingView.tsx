import React, { useState, useEffect, useRef } from "react";
import {
  Keyboard,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  Eye,
  EyeOff,
  Info,
  Sparkles,
  Volume2,
  Clock,
  GraduationCap
} from "lucide-react";
import { KANJI_DATASET } from "../data/kanji";
import type { KanjiItem } from "../data/kanji";
import type { SRSProgress } from "../hooks/useSRS";
import type { KanjiPreset } from "../hooks/usePresets";

interface TypingViewProps {
  getKanjiProgress: (kanji: string) => SRSProgress;
  gradeKanji: (kanji: string, score: number) => void;
  isDue: (kanji: string) => boolean;
  presets: KanjiPreset[];
  setView: (view: string) => void;
}

// Subcomponent to draw the Kanji securely on canvas to prevent copy-pasting text
interface KanjiCanvasProps {
  kanji: string;
}

const KanjiCanvas: React.FC<KanjiCanvasProps> = ({ kanji }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Retrieve theme colors dynamically
    const computed = window.getComputedStyle(canvas);
    const textColor = computed.getPropertyValue("--color-text-primary") || "#f8fafc";
    const bgColor = computed.getPropertyValue("--color-bg-surface-solid") || "#121826";
    const borderColor = computed.getPropertyValue("--color-border") || "rgba(255, 255, 255, 0.08)";

    const size = 180;
    canvas.width = size;
    canvas.height = size;

    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // Traditional genkouyoushi dashed grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    // If background is very light, adjust grid contrast
    if (textColor.includes("0") || textColor.includes("15") || textColor === "#0f172a") {
      ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
    }
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);

    // Horizontal helper line
    ctx.beginPath();
    ctx.moveTo(0, size / 2);
    ctx.lineTo(size, size / 2);
    ctx.stroke();

    // Vertical helper line
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(size / 2, size);
    ctx.stroke();

    // Solid border outline
    ctx.setLineDash([]);
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, size, size);

    // Draw the Kanji large
    ctx.font = "bold 95px 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = textColor;
    
    // Draw shadows to give a tactile, brush-like feel
    ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 2;

    ctx.fillText(kanji, size / 2, size / 2 + 5);
  }, [kanji]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "180px",
        height: "180px",
        borderRadius: "var(--radius-md)",
        display: "block",
        margin: "0 auto",
        pointerEvents: "none",
        userSelect: "none"
      }}
      title="Recognize this Kanji and type it below"
    />
  );
};

export const TypingView: React.FC<TypingViewProps> = ({
  getKanjiProgress,
  gradeKanji,
  isDue,
  presets,
  setView
}) => {
  // Session Configuration States
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionType, setSessionType] = useState<"due" | "level" | "preset">("level");
  const [selectedLevel, setSelectedLevel] = useState<5 | 4 | 3>(5);
  const [selectedPresetId, setSelectedPresetId] = useState<string>("");
  const [sessionSize, setSessionSize] = useState<number | "all">(10);

  // Active Session States
  const [sessionKanji, setSessionKanji] = useState<KanjiItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState({ meaning: false, reading: false });
  const [srsMessage, setSrsMessage] = useState<string | null>(null);

  // Stats and Timer
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [sessionResults, setSessionResults] = useState<Array<{
    kanji: KanjiItem;
    userTyped: string;
    isCorrect: boolean;
    hintsUsed: boolean;
  }>>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus text input on mounting a new card
  useEffect(() => {
    if (sessionActive && !sessionCompleted && !isSubmitted) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [sessionActive, sessionCompleted, currentIndex, isSubmitted]);

  // Elapsed Timer Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (sessionActive && !sessionCompleted) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionActive, sessionCompleted, startTime]);

  // Count due items
  const dueKanjiList = KANJI_DATASET.filter((k) => isDue(k.kanji));

  // Initialize selected Preset ID if empty
  useEffect(() => {
    if (presets.length > 0 && !selectedPresetId) {
      setSelectedPresetId(presets[0].id);
    }
  }, [presets, selectedPresetId]);

  // Speech Synthesizer Helper
  const speakJapanese = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(
      (voice) => voice.lang.includes("ja-JP") || voice.lang.startsWith("ja")
    );
    if (jaVoice) {
      utterance.voice = jaVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  // Helper to shuffle an array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Start the session based on configuration
  const handleStartSession = () => {
    let sourcePool: KanjiItem[] = [];

    if (sessionType === "due") {
      sourcePool = [...dueKanjiList];
    } else if (sessionType === "level") {
      sourcePool = KANJI_DATASET.filter((k) => k.jlpt === selectedLevel);
    } else if (sessionType === "preset") {
      const preset = presets.find((p) => p.id === selectedPresetId);
      if (preset) {
        sourcePool = KANJI_DATASET.filter((k) => preset.kanjiList.includes(k.kanji));
      }
    }

    if (sourcePool.length === 0) {
      alert("No Kanji characters available for this training configuration.");
      return;
    }

    // Shuffle the source pool for variety
    let finalSelection = shuffleArray(sourcePool);

    // Apply size constraints
    if (sessionSize !== "all" && finalSelection.length > sessionSize) {
      finalSelection = finalSelection.slice(0, sessionSize);
    }

    setSessionKanji(finalSelection);
    setCurrentIndex(0);
    setInputValue("");
    setIsSubmitted(false);
    setHintsRevealed({ meaning: false, reading: false });
    setSessionResults([]);
    setStartTime(Date.now());
    setElapsedTime(0);
    setSrsMessage(null);
    setSessionActive(true);
    setSessionCompleted(false);
  };

  // Submit typed answer
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isSubmitted || !inputValue.trim()) return;

    const currentItem = sessionKanji[currentIndex];
    const correctChar = currentItem.kanji;
    const cleanInput = inputValue.trim();
    const isCorrect = cleanInput === correctChar;

    setIsCorrectAnswer(isCorrect);
    setIsSubmitted(true);

    const srsProg = getKanjiProgress(correctChar);
    const hasHints = hintsRevealed.meaning || hintsRevealed.reading;

    // Automatic SRS Scoring integration
    let srsGrade = 1; // Default: incorrect
    if (isCorrect) {
      srsGrade = hasHints ? 3 : 5; // Hint used = 3 (Correct with difficulty), No hint = 5 (Perfect)
    }

    // Update SRS progress
    gradeKanji(correctChar, srsGrade);
    
    // Construct user feedback message regarding SRS state
    const newProg = getKanjiProgress(correctChar);
    if (isCorrect) {
      if (srsProg.box === 0) {
        setSrsMessage(`Added to study list! Mastery: Box 1`);
      } else {
        const boxDiff = newProg.box - srsProg.box;
        setSrsMessage(`Mastery updated! Box ${newProg.box} ${boxDiff > 0 ? "▲" : ""}`);
      }
    } else {
      setSrsMessage(srsProg.box > 0 ? `Incorrect. Mastery dropped to Box ${newProg.box} ▼` : "Added to study list for review");
    }

    // Record result
    setSessionResults((prev) => [
      ...prev,
      {
        kanji: currentItem,
        userTyped: cleanInput,
        isCorrect,
        hintsUsed: hasHints
      }
    ]);

    // Speak Kanji pronunciation upon answering correctly
    if (isCorrect) {
      speakJapanese(correctChar);
    }
  };

  // Skip the current card
  const handleSkip = () => {
    if (isSubmitted) return;

    const currentItem = sessionKanji[currentIndex];
    setIsCorrectAnswer(false);
    setIsSubmitted(true);

    // Skip counts as incorrect / blackout
    gradeKanji(currentItem.kanji, 1);
    const newProg = getKanjiProgress(currentItem.kanji);

    setSrsMessage(newProg.box > 1 ? `Skipped. Mastery level dropped to Box ${newProg.box} ▼` : "Added to study list for review");

    setSessionResults((prev) => [
      ...prev,
      {
        kanji: currentItem,
        userTyped: "[Skipped]",
        isCorrect: false,
        hintsUsed: true
      }
    ]);
  };

  // Progress to next question
  const handleNext = () => {
    if (currentIndex + 1 < sessionKanji.length) {
      setCurrentIndex((prev) => prev + 1);
      setInputValue("");
      setIsSubmitted(false);
      setHintsRevealed({ meaning: false, reading: false });
      setSrsMessage(null);
    } else {
      setSessionCompleted(true);
    }
  };

  // Render Time Taken beautifully
  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Cancel session and return to configuration
  const handleCancelSession = () => {
    if (window.confirm("Are you sure you want to end this training session?")) {
      setSessionActive(false);
      setSessionCompleted(false);
    }
  };

  // Keyboard navigation helpers
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (isSubmitted) {
        handleNext();
      } else {
        handleSubmit();
      }
    }
  };

  // --- RENDERING Summary View ---
  if (sessionCompleted) {
    const totalCorrect = sessionResults.filter((r) => r.isCorrect).length;
    const accuracy = Math.round((totalCorrect / sessionKanji.length) * 100) || 0;

    return (
      <div className="practice-view animate-fade-in" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="view-header">
          <div>
            <h1>Keyboard Training Complete!</h1>
            <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
              Great job practicing your Kanji writing on the keyboard. Here is your accuracy report:
            </p>
          </div>
        </div>

        {/* Core Stats Overview */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          <div className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>ACCURACY</span>
            <h2 style={{ fontSize: "36px", color: accuracy >= 70 ? "var(--color-success)" : "var(--color-warning)", marginTop: "8px" }}>
              {accuracy}%
            </h2>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "4px" }}>
              {totalCorrect} of {sessionKanji.length} correct
            </p>
          </div>

          <div className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>TIME ELAPSED</span>
            <h2 style={{ fontSize: "36px", color: "var(--color-primary)", marginTop: "8px" }}>
              {formatTime(elapsedTime)}
            </h2>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "4px" }}>
              Avg. {Math.round(elapsedTime / sessionKanji.length)}s per card
            </p>
          </div>

          <div className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>SRS UPDATES</span>
            <h2 style={{ fontSize: "36px", color: "var(--color-kunyomi)", marginTop: "8px" }}>
              {sessionResults.length}
            </h2>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "4px" }}>
              Reviews processed
            </p>
          </div>
        </div>

        {/* Detailed Breakdown list */}
        <div className="glass-card" style={{ padding: "24px", marginBottom: "24px" }}>
          <h3 style={{ marginBottom: "16px", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <GraduationCap size={20} style={{ color: "var(--color-primary)" }} />
            <span>Character-by-Character Performance</span>
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {sessionResults.map((result) => {
              const prog = getKanjiProgress(result.kanji.kanji);
              return (
                <div
                  key={result.kanji.kanji}
                  className="glass-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 16px",
                    gap: "16px",
                    borderColor: result.isCorrect ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.01)"
                  }}
                >
                  <div style={{ fontSize: "28px", fontWeight: "bold", fontFamily: "var(--font-japanese)" }}>
                    {result.kanji.kanji}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>
                      {result.kanji.meanings.slice(0, 2).join(", ")}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                      Reading: {result.kanji.kunyomi[0] || result.kanji.onyomi[0]} | Typed:{" "}
                      <code style={{ padding: "2px 4px", borderRadius: "4px", background: "rgba(0,0,0,0.15)", fontSize: "11px", color: result.isCorrect ? "var(--color-text-primary)" : "var(--color-danger)" }}>
                        {result.userTyped}
                      </code>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {result.hintsUsed && (
                      <span className="tag" style={{ fontSize: "10px", padding: "2px 6px", background: "rgba(255,255,255,0.05)", color: "var(--color-text-muted)" }}>
                        Hints Used
                      </span>
                    )}
                    <span className={`tag box-${prog.box}`} style={{ fontSize: "10px", padding: "2px 6px" }}>
                      Box {prog.box}
                    </span>
                    {result.isCorrect ? (
                      <CheckCircle2 size={20} style={{ color: "var(--color-success)" }} />
                    ) : (
                      <XCircle size={20} style={{ color: "var(--color-danger)" }} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons Row */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
          <button
            type="button"
            className="btn"
            style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-primary)" }}
            onClick={() => setSessionActive(false)}
          >
            <RotateCcw size={16} style={{ marginRight: "8px" }} />
            Configure Session
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleStartSession}
          >
            <ArrowRight size={16} style={{ marginRight: "8px" }} />
            Retry Session
          </button>
        </div>
      </div>
    );
  }

  // --- RENDERING Active Session ---
  if (sessionActive) {
    const currentItem = sessionKanji[currentIndex];
    const srsInfo = getKanjiProgress(currentItem.kanji);

    return (
      <div className="practice-view animate-fade-in" style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Session Info Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <button
            type="button"
            className="icon-btn"
            style={{ border: "1px solid var(--color-border)", padding: "6px 12px", background: "rgba(255,255,255,0.02)" }}
            onClick={handleCancelSession}
          >
            <Home size={15} style={{ marginRight: "6px" }} />
            Abort
          </button>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={14} />
              {formatTime(elapsedTime)}
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
              Card <strong>{currentIndex + 1}</strong> of {sessionKanji.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ width: "100%", height: "4px", background: "var(--color-border)", borderRadius: "2px", marginBottom: "24px", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              background: "linear-gradient(to right, var(--color-primary), var(--color-kunyomi))",
              width: `${((currentIndex + (isSubmitted ? 1 : 0)) / sessionKanji.length) * 100}%`,
              transition: "width 0.3s ease"
            }}
          />
        </div>

        {/* Main Card Grid */}
        <div className="writing-view-canvas-row" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "20px", alignItems: "start" }}>
          {/* SECURE CANVAS IMAGE CONTAINER */}
          <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "240px", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <KanjiCanvas kanji={currentItem.kanji} />
              {srsInfo.box > 0 && (
                <div
                  className={`card-srs-indicator box-${srsInfo.box}`}
                  style={{ position: "absolute", top: "-8px", right: "-8px" }}
                  title={`SRS mastery level: Box ${srsInfo.box}`}
                />
              )}
            </div>
            <span style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              OCR Secure Image
            </span>
          </div>

          {/* INPUT FORM AND FEEDBACK PANEL */}
          <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px", minHeight: "240px" }}>
            {!isSubmitted ? (
              // TYPING STATE
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}>
                <div>
                  <h3 style={{ fontSize: "16px", marginBottom: "6px" }}>Identify this Character</h3>
                  <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                    Activate your Japanese Keyboard (IME) and type the matching character.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="kanji-input" style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)" }}>
                    Type the Kanji:
                  </label>
                  <input
                    id="kanji-input"
                    ref={inputRef}
                    type="text"
                    className="search-input"
                    placeholder="Type the matching Japanese Kanji..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="false"
                    maxLength={5}
                    style={{
                      fontSize: "18px",
                      padding: "10px 14px",
                      background: "rgba(0,0,0,0.15)",
                      borderColor: inputValue.trim() ? "var(--color-primary)" : "var(--color-border)",
                      textAlign: "center",
                      color: "var(--color-text-primary)"
                    }}
                  />
                </div>

                {/* Hints panel */}
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "12px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => setHintsRevealed((prev) => ({ ...prev, meaning: !prev.meaning }))}
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      background: hintsRevealed.meaning ? "rgba(99, 102, 241, 0.1)" : "transparent",
                      borderColor: hintsRevealed.meaning ? "var(--color-primary)" : "var(--color-border)",
                      color: hintsRevealed.meaning ? "var(--color-primary)" : "var(--color-text-secondary)"
                    }}
                  >
                    {hintsRevealed.meaning ? <EyeOff size={13} style={{ marginRight: "4px" }} /> : <Eye size={13} style={{ marginRight: "4px" }} />}
                    <span>{hintsRevealed.meaning ? `Meaning Hint: ${currentItem.meanings.slice(0,2).join(", ")}` : "Reveal Meaning Hint"}</span>
                  </button>

                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => setHintsRevealed((prev) => ({ ...prev, reading: !prev.reading }))}
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      background: hintsRevealed.reading ? "rgba(32, 201, 151, 0.1)" : "transparent",
                      borderColor: hintsRevealed.reading ? "var(--color-kunyomi)" : "var(--color-border)",
                      color: hintsRevealed.reading ? "var(--color-kunyomi)" : "var(--color-text-secondary)"
                    }}
                  >
                    {hintsRevealed.reading ? <EyeOff size={13} style={{ marginRight: "4px" }} /> : <Eye size={13} style={{ marginRight: "4px" }} />}
                    <span>
                      {hintsRevealed.reading
                        ? `Reading: ${currentItem.kunyomi[0] || currentItem.onyomi[0] || "None"}`
                        : "Reveal Reading Hint"}
                    </span>
                  </button>
                </div>

                {/* Form Buttons */}
                <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "auto" }}>
                  <button
                    type="button"
                    className="btn"
                    style={{ background: "transparent", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}
                    onClick={handleSkip}
                  >
                    Skip / I Don't Know
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!inputValue.trim()}
                  >
                    Submit Answer
                  </button>
                </div>
              </form>
            ) : (
              // ANSWER SUBMITTED STATE
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}>
                {/* Result Alert Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: isCorrectAnswer ? "var(--color-success-bg)" : "var(--color-danger-bg)",
                    border: `1px solid ${isCorrectAnswer ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)"}`
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {isCorrectAnswer ? (
                      <CheckCircle2 size={20} style={{ color: "var(--color-success)" }} />
                    ) : (
                      <XCircle size={20} style={{ color: "var(--color-danger)" }} />
                    )}
                    <span style={{ fontWeight: 700, color: isCorrectAnswer ? "var(--color-success)" : "var(--color-danger)" }}>
                      {isCorrectAnswer ? "Correct Answer!" : "Incorrect Answer"}
                    </span>
                  </div>
                  
                  {srsMessage && (
                    <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Sparkles size={11} style={{ color: "var(--color-kunyomi)" }} />
                      {srsMessage}
                    </span>
                  )}
                </div>

                {/* Show details since answer is submitted */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <h2 className="kanji-text" style={{ fontSize: "36px" }}>{currentItem.kanji}</h2>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span className="tag tag-jlpt">JLPT N{currentItem.jlpt}</span>
                      <span className="tag" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-muted)" }}>
                        {currentItem.strokeCount} Strokes
                      </span>
                    </div>
                    <button
                      type="button"
                      className="speak-btn"
                      onClick={() => speakJapanese(currentItem.kanji)}
                      style={{ padding: "6px", borderRadius: "50%" }}
                      title="Listen Pronunciation"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>

                  <div>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Meanings</span>
                    <span style={{ fontSize: "15px", fontWeight: 500 }}>{currentItem.meanings.join(", ")}</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div>
                      <span style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Onyomi</span>
                      <span style={{ color: "var(--color-onyomi)" }}>{currentItem.onyomi.join(", ") || "None"}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Kunyomi</span>
                      <span style={{ color: "var(--color-kunyomi)" }}>{currentItem.kunyomi.join(", ") || "None"}</span>
                    </div>
                  </div>

                  {currentItem.examples && currentItem.examples.length > 0 && (
                    <div style={{ marginTop: "6px" }}>
                      <span style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>Vocabulary Example</span>
                      <div className="vocab-item" style={{ padding: "6px 10px", margin: 0 }}>
                        <div className="vocab-japanese">
                          <span className="vocab-reading" style={{ fontSize: "10px" }}>{currentItem.examples[0].reading}</span>
                          <span className="vocab-word" style={{ fontSize: "14px" }}>{currentItem.examples[0].word}</span>
                        </div>
                        <span className="vocab-english" style={{ fontSize: "12px" }}>{currentItem.examples[0].meaning}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNext}
                  style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <span>{currentIndex + 1 === sessionKanji.length ? "Finish Session" : "Next Character"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- RENDERING Configuration Setup Screen ---
  return (
    <div className="practice-view animate-fade-in" style={{ maxWidth: "750px", margin: "0 auto" }}>
      <div className="view-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
        <div>
          <h1>Kanji Keyboard Trainer</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Test your visual recall and handwriting conversion by typing the characters shown. Grid images are rendered securely on a canvas to block clipboard copying.
          </p>
        </div>
        <button
          type="button"
          className="icon-btn"
          style={{ border: "1px solid var(--color-border)", padding: "8px 16px", background: "rgba(255,255,255,0.02)", flexShrink: 0 }}
          onClick={() => setView("dashboard")}
        >
          <Home size={16} style={{ marginRight: "6px" }} />
          Dashboard
        </button>
      </div>

      <div className="writing-view-layout" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "20px" }}>
        {/* Setup Parameters Panel */}
        <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3 style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Keyboard size={20} style={{ color: "var(--color-primary)" }} />
            <span>Configure Training Session</span>
          </h3>

          {/* Mode Selection */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)" }}>
              Select Training Target:
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label
                className={`writing-kanji-item ${sessionType === "due" ? "active" : ""}`}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "12px", width: "100%" }}
              >
                <input
                  type="radio"
                  name="sessionType"
                  checked={sessionType === "due"}
                  onChange={() => setSessionType("due")}
                  style={{ marginRight: "12px" }}
                />
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <span style={{ fontWeight: 600, fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                    SRS Review Queue
                    {dueKanjiList.length > 0 && (
                      <span className="tag tag-kunyomi" style={{ fontSize: "9px" }}>
                        {dueKanjiList.length} Due
                      </span>
                    )}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>
                    Test characters that are scheduled for spaced repetition review right now.
                  </span>
                </div>
              </label>

              <label
                className={`writing-kanji-item ${sessionType === "level" ? "active" : ""}`}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "12px", width: "100%" }}
              >
                <input
                  type="radio"
                  name="sessionType"
                  checked={sessionType === "level"}
                  onChange={() => setSessionType("level")}
                  style={{ marginRight: "12px" }}
                />
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <span style={{ fontWeight: 600, fontSize: "14px" }}>JLPT Proficiency Level</span>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>
                    Train using core Kanji lists filtered by JLPT levels.
                  </span>
                </div>
              </label>

              <label
                className={`writing-kanji-item ${sessionType === "preset" ? "active" : ""}`}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "12px", width: "100%" }}
              >
                <input
                  type="radio"
                  name="sessionType"
                  checked={sessionType === "preset"}
                  onChange={() => setSessionType("preset")}
                  style={{ marginRight: "12px" }}
                />
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <span style={{ fontWeight: 600, fontSize: "14px" }}>Custom Study Sets / Presets</span>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>
                    Select a preset study bundle or custom set of characters.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Sub-selectors depending on mode */}
          {sessionType === "level" && (
            <div className="reading-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Choose Level:</span>
              <div style={{ display: "flex", gap: "8px", width: "100%" }}>
                {([5, 4, 3] as const).map((level) => (
                  <button
                    key={level}
                    type="button"
                    className={`btn ${selectedLevel === level ? "btn-primary" : ""}`}
                    style={{ flexGrow: 1, padding: "8px", background: selectedLevel === level ? "" : "rgba(255,255,255,0.02)", border: "1px solid var(--color-border)" }}
                    onClick={() => setSelectedLevel(level)}
                  >
                    JLPT N{level}
                  </button>
                ))}
              </div>
            </div>
          )}

          {sessionType === "preset" && (
            <div className="reading-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Select Study Set:</span>
              {presets.length > 0 ? (
                <select
                  value={selectedPresetId}
                  onChange={(e) => setSelectedPresetId(e.target.value)}
                  className="preset-name-input"
                  style={{ width: "100%", padding: "10px", borderRadius: "var(--radius-md)", background: "var(--color-bg-surface-solid)", borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  {presets.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.name} ({preset.kanjiList.length} items)
                    </option>
                  ))}
                </select>
              ) : (
                <p style={{ fontSize: "12px", color: "var(--color-danger)" }}>No presets defined yet. Go to Study Sets page to make one.</p>
              )}
            </div>
          )}

          {/* Session Size Selector */}
          <div className="reading-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Session Length (Max items to review):</span>
            <div style={{ display: "flex", gap: "6px", width: "100%", flexWrap: "wrap" }}>
              {([5, 10, 20, "all"] as const).map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`btn ${sessionSize === size ? "btn-primary" : ""}`}
                  style={{ flexGrow: 1, padding: "8px 12px", background: sessionSize === size ? "" : "rgba(255,255,255,0.02)", border: "1px solid var(--color-border)", fontSize: "13px" }}
                  onClick={() => setSessionSize(size)}
                >
                  {size === "all" ? "All Items" : `${size} Cards`}
                </button>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleStartSession}
            disabled={sessionType === "due" && dueKanjiList.length === 0}
            style={{ width: "100%", padding: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "15px", marginTop: "8px" }}
          >
            <span>Start Training Session</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Informative Sideboard Panel */}
        <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ fontSize: "15px", color: "var(--color-text-secondary)" }}>
            <Info size={16} style={{ marginRight: "6px", verticalAlign: "middle" }} />
            Training Rules & Tips
          </h3>

          <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "flex", flexDirection: "column", gap: "12px", lineHeight: 1.5 }}>
            <p>
              1. <strong>Input Method</strong>: Ensure you have Japanese IME active (standard Microsoft IME, Google Japanese Input, or macOS Japanese).
            </p>
            <p>
              2. <strong>Keyboard Conversion</strong>: Look at the grid character image. Type the reading (hiragana/romaji) on your keyboard, then hit your keyboard's <strong>Spacebar</strong> to convert it into the correct Kanji before submitting.
            </p>
            <p>
              3. <strong>Anti-OCR Canvas</strong>: Characters are dynamically drawn into HTML5 raster pixels. Copy/paste or inspector shortcuts will not leak the character text, testing pure visual memory.
            </p>
            <p>
              4. <strong>SRS Scoring Integration</strong>:
              <ul style={{ paddingLeft: "20px", marginTop: "4px" }}>
                <li>Correct on first try: <strong>Perfect (5)</strong>.</li>
                <li>Correct but revealed hints: <strong>Hard/Hesitation (3)</strong>.</li>
                <li>Skipped or incorrect: <strong>Failure (1)</strong>.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
