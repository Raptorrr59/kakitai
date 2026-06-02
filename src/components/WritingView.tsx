import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Volume2, Sparkles } from "lucide-react";
import { KANJI_DATASET } from "../data/kanji";
import type { KanjiItem } from "../data/kanji";
import type { SRSProgress } from "../hooks/useSRS";
import { CanvasPad } from "./CanvasPad";

interface WritingViewProps {
  getKanjiProgress: (kanji: string) => SRSProgress;
  gradeKanji: (kanji: string, score: number) => void;
  startLearning: (kanji: string) => void;
  isDue: (kanji: string) => boolean;
}

export const WritingView: React.FC<WritingViewProps> = ({
  getKanjiProgress,
  gradeKanji,
  startLearning,
  isDue
}) => {
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem>(KANJI_DATASET[0]);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [lastGradedInfo, setLastGradedInfo] = useState<{ kanji: string; score: number; interval: number } | null>(null);

  // Separate due Kanji from others, showing due items at the top
  const sortedKanjiList = [...KANJI_DATASET].sort((a, b) => {
    const aDue = isDue(a.kanji);
    const bDue = isDue(b.kanji);
    const aProgress = getKanjiProgress(a.kanji);
    const bProgress = getKanjiProgress(b.kanji);

    if (aDue && !bDue) return -1;
    if (!aDue && bDue) return 1;
    
    // Put other active learning cards next
    if (aProgress.box > 0 && bProgress.box === 0) return -1;
    if (aProgress.box === 0 && bProgress.box > 0) return 1;

    return 0;
  });

  const dueItems = KANJI_DATASET.filter(item => isDue(item.kanji));

  // If there are due items, auto-select the first due item when the page loads
  useEffect(() => {
    if (dueItems.length > 0) {
      // Find the first due item in the sorted list and select it
      const firstDue = sortedKanjiList.find(item => isDue(item.kanji));
      if (firstDue) {
        setSelectedKanji(firstDue);
      }
    }
  }, [dueItems.length]);

  const speakJapanese = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find((voice) => voice.lang.includes("ja-JP") || voice.lang.startsWith("ja"));
    if (jaVoice) {
      utterance.voice = jaVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  const handleGrade = (score: number) => {
    // Record grade
    gradeKanji(selectedKanji.kanji, score);
    
    // Save details to display quick toast feedback
    const updatedProgress = getKanjiProgress(selectedKanji.kanji);
    setLastGradedInfo({
      kanji: selectedKanji.kanji,
      score,
      interval: score >= 3 ? Math.round(updatedProgress.interval * (score === 5 ? 2.5 : 1.5)) || 1 : 1
    });

    // Auto fadeout last graded toast
    setTimeout(() => {
      setLastGradedInfo(null);
    }, 4000);

    // If we were reviewing a due item, check if there's another due item to jump to
    const remainingDue = KANJI_DATASET.filter(
      (item) => item.kanji !== selectedKanji.kanji && isDue(item.kanji)
    );

    if (remainingDue.length > 0) {
      // Select the next due item
      setSelectedKanji(remainingDue[0]);
    } else if (isDue(selectedKanji.kanji)) {
      // We just completed the last due item!
      setSessionCompleted(true);
      
      // Select a standard item next
      const fallback = KANJI_DATASET.find(item => item.kanji !== selectedKanji.kanji) || KANJI_DATASET[0];
      setSelectedKanji(fallback);
    }
  };

  const progress = getKanjiProgress(selectedKanji.kanji);

  return (
    <div className="writing-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1>Writing Studio</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Practice writing Kanji strokes on the drawing board. Active reviews will schedule automatically.
          </p>
        </div>
      </div>

      {sessionCompleted && (
        <div 
          className="review-alert-banner" 
          style={{ 
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(32, 201, 151, 0.12) 100%)", 
            borderColor: "rgba(16, 185, 129, 0.3)" 
          }}
        >
          <div className="review-alert-content">
            <h3 className="review-alert-title" style={{ color: "var(--color-success)" }}>
              <CheckCircle2 size={20} />
              SRS Review Queue Cleared!
            </h3>
            <p className="review-alert-desc">
              All due Kanji reviews have been graded and rescheduled. Good job building muscle memory!
            </p>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setSessionCompleted(false)}
          >
            Dismiss
          </button>
        </div>
      )}

      {lastGradedInfo && (
        <div 
          className="glass-card" 
          style={{ 
            position: "fixed", 
            bottom: "24px", 
            right: "24px", 
            zIndex: 1000, 
            borderColor: "var(--color-border-active)", 
            padding: "16px 20px", 
            display: "flex", 
            alignItems: "center", 
            gap: "12px",
            backgroundColor: "var(--color-bg-surface-solid)",
            boxShadow: "var(--shadow-lg)",
            animation: "slideUp 0.2s ease-out"
          }}
        >
          <Sparkles size={20} style={{ color: "var(--color-kunyomi)" }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px" }}>Graded {lastGradedInfo.kanji} with {lastGradedInfo.score}/5</div>
            <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
              Next review scheduled in {lastGradedInfo.interval} days.
            </div>
          </div>
        </div>
      )}

      <div className="writing-view-layout">
        {/* Left Side: Kanji Selection Menu */}
        <div className="glass-card" style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "15px", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-muted)" }}>
            Select Character
          </h3>
          
          <div className="writing-kanji-list">
            {sortedKanjiList.map((item) => {
              const itemProgress = getKanjiProgress(item.kanji);
              const itemDue = isDue(item.kanji);
              const isActive = item.kanji === selectedKanji.kanji;

              return (
                <div
                  key={item.kanji}
                  className={`writing-kanji-item ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedKanji(item)}
                >
                  <div className="writing-kanji-item-char kanji-text">
                    {item.kanji}
                  </div>
                  <div className="writing-kanji-item-meta" style={{ flexGrow: 1 }}>
                    <span className="writing-kanji-item-meaning">{item.meanings[0]}</span>
                    <span className="writing-kanji-item-reading">
                      {item.kunyomi[0] || item.onyomi[0]}
                    </span>
                  </div>

                  {itemDue ? (
                    <span className="tag tag-onyomi" style={{ fontSize: "9px" }}>Due</span>
                  ) : itemProgress.box > 0 ? (
                    <div 
                      className={`card-srs-indicator box-${itemProgress.box}`} 
                      style={{ position: "relative", top: 0, right: 0 }} 
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Drawing Canvas and Stats */}
        <div className="writing-studio-main">
          <div className="glass-card" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <h1 className="kanji-text" style={{ fontSize: "40px" }}>{selectedKanji.kanji}</h1>
                <span className="meanings-list" style={{ fontSize: "18px", color: "var(--color-text-secondary)" }}>
                  {selectedKanji.meanings.join(", ")}
                </span>
              </div>

              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                <span className="tag tag-jlpt">JLPT N{selectedKanji.jlpt}</span>
                <span className="tag tag-jlpt" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-secondary)" }}>
                  {selectedKanji.strokeCount} Strokes
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div className="reading-row" style={{ gap: "8px" }}>
                <span className="lbl" style={{ minWidth: "60px", fontSize: "11px" }}>Onyomi</span>
                <span style={{ fontSize: "14px", color: "var(--color-onyomi)" }}>
                  {selectedKanji.onyomi.join(", ") || "None"}
                </span>
              </div>
              <div className="reading-row" style={{ gap: "8px" }}>
                <span className="lbl" style={{ minWidth: "60px", fontSize: "11px" }}>Kunyomi</span>
                <span style={{ fontSize: "14px", color: "var(--color-kunyomi)" }}>
                  {selectedKanji.kunyomi.join(", ") || "None"}
                </span>
              </div>
            </div>
          </div>

          <div className="writing-view-canvas-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* Canvas Panel */}
            <CanvasPad kanji={selectedKanji.kanji} />

            {/* Guide Instructions & Vocab */}
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="writing-instructions">
                <h3>Writing Instructions</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginTop: "6px" }}>
                  1. Activate the <strong>Guide</strong> toggle in the canvas to trace the character shape.<br />
                  2. Draw standard stroke lines (top-to-bottom, left-to-right).<br />
                  3. Deactivate the guide overlay to test your recall.<br />
                  4. Self-assess your performance using the SRS panel below to update review intervals.
                </p>
              </div>

              <div className="vocab-section" style={{ flexGrow: 1 }}>
                <h3>Vocabulary Context Examples</h3>
                <div className="vocab-list" style={{ marginTop: "10px" }}>
                  {selectedKanji.examples.slice(0, 2).map((ex) => (
                    <div key={ex.word} className="vocab-item" style={{ padding: "8px 12px" }}>
                      <div className="vocab-japanese">
                        <span className="vocab-reading" style={{ fontSize: "11px" }}>{ex.reading}</span>
                        <span className="vocab-word" style={{ fontSize: "15px" }}>{ex.word}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span className="vocab-english" style={{ fontSize: "13px" }}>{ex.meaning}</span>
                        <button
                          type="button"
                          className="speak-btn"
                          onClick={() => speakJapanese(ex.word)}
                          title="Speak pronunciation"
                        >
                          <Volume2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Spaced Repetition Grading */}
          <div className="glass-card" style={{ padding: "20px" }}>
            <h3 style={{ marginBottom: "8px" }}>Spaced Repetition Review</h3>
            {progress.box === 0 ? (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                  This Kanji is currently "New" (not in active study queue). Start learning it now to track progress.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => startLearning(selectedKanji.kanji)}
                >
                  Start Learning
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "14px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-kunyomi)" }} />
                    <span>Active Study Pool: <strong>Box {progress.box}</strong></span>
                  </span>
                  {isDue(selectedKanji.kanji) ? (
                    <span className="tag tag-onyomi" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <AlertCircle size={12} />
                      <span>Review Due Now</span>
                    </span>
                  ) : (
                    <span>Next Review scheduled for: {new Date(progress.nextReviewDate).toLocaleDateString()}</span>
                  )}
                </div>

                <div className="srs-grade-buttons-container" style={{ marginTop: 0 }}>
                  <span className="srs-grade-buttons-label">Rate your tracing performance:</span>
                  <div className="srs-grade-buttons-grid">
                    {[0, 1, 2, 3, 4, 5].map((score) => (
                      <button
                        key={score}
                        type="button"
                        className={`grade-btn grade-${score}`}
                        onClick={() => handleGrade(score)}
                      >
                        <span className="grade-btn-num">{score}</span>
                        <span className="grade-btn-lbl">
                          {score === 0 ? "Blackout" : score === 2 ? "Hard" : score === 4 ? "Good" : score === 5 ? "Perfect" : "..."}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
