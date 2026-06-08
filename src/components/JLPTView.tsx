import React, { useState, useEffect, useRef } from "react";
import { Clock, ArrowLeft, ArrowRight, RotateCcw, Home, Loader2, Flag, ClipboardCheck, Timer } from "lucide-react";
import type { Question } from "../data/questions";

interface JLPTViewProps {
  setView: (view: string) => void;
}

interface ExamState {
  questions: Question[];
  currentIdx: number;
  userAnswers: Record<string, string>; // questionId -> selectedOption
  flagged: Record<string, boolean>; // questionId -> isFlagged
  timeRemaining: number; // in seconds
  examActive: boolean;
  examFinished: boolean;
  selectedLevel: 5 | 4 | 3;
  timeSpent: number; // in seconds
}

export const JLPTView: React.FC<JLPTViewProps> = ({ setView }) => {
  const [loading, setLoading] = useState(true);
  const [questionsPool, setQuestionsPool] = useState<Question[]>([]);
  
  // Selection Screen State
  const [level, setLevel] = useState<5 | 4 | 3>(5);
  const [examState, setExamState] = useState<ExamState | null>(null);

  // Timer Ref
  const timerRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load the large compiled questions dataset
    import("../data/questions.json")
      .then((m) => {
        setQuestionsPool(m.default as Question[]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to dynamically import Practice Arena questions:", err);
        setLoading(false);
      });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer effect
  useEffect(() => {
    if (examState && examState.examActive && !examState.examFinished) {
      timerRef.current = setInterval(() => {
        setExamState((prev) => {
          if (!prev) return null;
          if (prev.timeRemaining <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            return {
              ...prev,
              timeRemaining: 0,
              examFinished: true
            };
          }
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1,
            timeSpent: prev.timeSpent + 1
          };
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examState?.examActive, examState?.examFinished]);

  if (loading) {
    return (
      <div className="practice-view animate-fade-in" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", flexDirection: "column", gap: "16px" }}>
        <Loader2 className="animate-spin" size={36} style={{ color: "var(--color-primary)" }} />
        <p style={{ color: "var(--color-text-muted)", fontSize: "14px" }}>Loading JLPT Exam Database...</p>
      </div>
    );
  }

  const startExam = (selectedLevel: 5 | 4 | 3) => {
    // Filter questions by level
    const levelQuestions = questionsPool.filter((q) => q.level === selectedLevel);
    
    if (levelQuestions.length === 0) {
      alert("No questions found for this level.");
      return;
    }

    // Select 20 random questions
    const shuffled = [...levelQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20).map((q) => {
      // Shuffle options for each question
      const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
      return {
        ...q,
        options: shuffledOptions
      };
    });

    // Set exam time limit based on level: N5 = 20 mins, N4 = 25 mins, N3 = 30 mins
    const minutes = selectedLevel === 5 ? 20 : selectedLevel === 4 ? 25 : 30;

    setExamState({
      questions: selected,
      currentIdx: 0,
      userAnswers: {},
      flagged: {},
      timeRemaining: minutes * 60,
      timeSpent: 0,
      examActive: true,
      examFinished: false,
      selectedLevel
    });
  };

  const handleSelectOption = (option: string) => {
    if (!examState || examState.examFinished) return;
    const currentQ = examState.questions[examState.currentIdx];
    
    setExamState((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [currentQ.id]: option
        }
      };
    });
  };

  const toggleFlag = () => {
    if (!examState || examState.examFinished) return;
    const currentQ = examState.questions[examState.currentIdx];

    setExamState((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        flagged: {
          ...prev.flagged,
          [currentQ.id]: !prev.flagged[currentQ.id]
        }
      };
    });
  };

  const navigateTo = (idx: number) => {
    if (!examState) return;
    if (idx < 0 || idx >= examState.questions.length) return;
    setExamState((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIdx: idx
      };
    });
  };

  const submitExam = () => {
    if (!examState || examState.examFinished) return;
    
    const answeredCount = Object.keys(examState.userAnswers).length;
    const totalQ = examState.questions.length;
    
    if (answeredCount < totalQ) {
      if (!window.confirm(`You have only answered ${answeredCount} of ${totalQ} questions. Are you sure you want to submit the exam?`)) {
        return;
      }
    } else {
      if (!window.confirm("Are you sure you want to finish and submit your exam?")) {
        return;
      }
    }

    if (timerRef.current) clearInterval(timerRef.current);
    
    setExamState((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        examFinished: true
      };
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const formatSentence = (sentenceText: string) => {
    // JLPT Trainer DOES NOT show furigana by default to test raw reading competency, 
    // but N5 level questions have hiragana-only versions.
    // We will render simple text without furigana tags in exam mode, 
    // but show them in the final review panel.
    const boldParts = sentenceText.split("**");
    return boldParts.map((part, index) => {
      const isBold = index % 2 === 1;
      const rubyRegex = /([^{}\s]+)\{([^}]+)\}/g;
      const cleanPart = part.replace(rubyRegex, "$1");
      return isBold ? <strong key={index}>{cleanPart}</strong> : <span key={index}>{cleanPart}</span>;
    });
  };

  const formatSentenceWithFurigana = (sentenceText: string) => {
    // Used in review mode to help the user learn
    const boldParts = sentenceText.split("**");
    return boldParts.map((part, index) => {
      const isBold = index % 2 === 1;
      const rubyRegex = /([^{}\s]+)\{([^}]+)\}/g;
      const renderedPart = [];
      let match;
      let lastIdx = 0;
      while ((match = rubyRegex.exec(part)) !== null) {
        const matchIndex = match.index;
        if (matchIndex > lastIdx) {
          renderedPart.push(part.substring(lastIdx, matchIndex));
        }
        const baseWord = match[1];
        const reading = match[2];
        renderedPart.push(
          <ruby key={matchIndex}>
            {baseWord}
            <rt style={{ fontSize: "0.55em", color: "var(--color-primary)", display: "block" }}>{reading}</rt>
          </ruby>
        );
        lastIdx = rubyRegex.lastIndex;
      }
      if (lastIdx < part.length) {
        renderedPart.push(part.substring(lastIdx));
      }
      return isBold ? <strong key={index}>{renderedPart}</strong> : <span key={index}>{renderedPart}</span>;
    });
  };

  // Render subject details
  const renderSubjectExplanation = (subject: string) => {
    // Simple look up in database
    const matchedKanji = KANJI_DATASET_MOCK.find(k => k.kanji === subject);
    if (matchedKanji) {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
          <div><strong>Meanings:</strong> {matchedKanji.meanings.join(", ")}</div>
          <div><strong>Onyomi:</strong> {matchedKanji.onyomi.join(", ") || "None"}</div>
          <div><strong>Kunyomi:</strong> {matchedKanji.kunyomi.join(", ") || "None"}</div>
        </div>
      );
    }
    return <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Compound word or grammar point. Focus on reading and translating in context.</span>;
  };

  // MOCK KANJI DETAILS FOR SUBJECT FOCUS EXPLANATION
  const KANJI_DATASET_MOCK = [
    { kanji: "一", meanings: ["one"], onyomi: ["イチ"], kunyomi: ["ひと", "ひと.つ"] },
    { kanji: "二", meanings: ["two"], onyomi: ["ニ"], kunyomi: ["ふた", "ふた.つ"] },
    { kanji: "三", meanings: ["three"], onyomi: ["サン"], kunyomi: ["み", "み.つ"] },
    { kanji: "四", meanings: ["four"], onyomi: ["シ"], kunyomi: ["よ", "よ.つ"] },
    { kanji: "五", meanings: ["five"], onyomi: ["ゴ"], kunyomi: ["いつ", "いつ.つ"] },
    { kanji: "六", meanings: ["six"], onyomi: ["ロク"], kunyomi: ["む", "む.つ"] },
    { kanji: "七", meanings: ["seven"], onyomi: ["シチ"], kunyomi: ["なな", "なな.つ"] },
    { kanji: "八", meanings: ["eight"], onyomi: ["ハチ"], kunyomi: ["や", "や.つ"] },
    { kanji: "九", meanings: ["nine"], onyomi: ["キュウ", "ク"], kunyomi: ["ここの", "ここの.つ"] },
    { kanji: "十", meanings: ["ten"], onyomi: ["ジュウ"], kunyomi: ["とお"] },
    { kanji: "先生", meanings: ["teacher"], onyomi: ["センセイ"], kunyomi: ["せんせい"] },
    { kanji: "日本", meanings: ["Japan"], onyomi: ["ニホン"], kunyomi: ["にほん"] },
    { kanji: "車", meanings: ["car"], onyomi: ["シャ"], kunyomi: ["くるま"] },
    { kanji: "水", meanings: ["water"], onyomi: ["スイ"], kunyomi: ["みず"] }
  ];

  // ==========================================
  // VIEW: 1. SELECT LEVEL SCREEN
  // ==========================================
  if (!examState) {
    return (
      <div className="practice-view animate-fade-in">
        <div className="practice-container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="glass-card" style={{ textAlign: "center", padding: "40px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <div className="stat-icon-wrapper blue" style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }}>
                <ClipboardCheck size={32} />
              </div>
            </div>
            <h1 style={{ textAlign: "center", marginBottom: "12px" }}>JLPT Mock Exam Simulator</h1>
            <p style={{ color: "var(--color-text-secondary)", textAlign: "center", lineHeight: 1.6, marginBottom: "28px" }}>
              Simulate a real JLPT exam. Test your Japanese Kanji, Vocabulary, and Grammar competencies under real exam conditions: a countdown timer, no instant answers/feedback, and review-flagging support.
            </p>

            <div className="glass-card" style={{ backgroundColor: "var(--color-bg-surface-solid)", border: "1px dashed var(--color-border)", marginBottom: "28px", textAlign: "left" }}>
              <h3 style={{ marginBottom: "10px", fontSize: "15px" }}>⚠️ Exam Rules:</h3>
              <ul style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>⏱️ <strong>Timed Countdown:</strong> Exam submits automatically when time expires.</li>
                <li>🚫 <strong>No Instant Answers:</strong> You will not see if your choices are right or wrong until you submit.</li>
                <li>🔄 <strong>Exam Navigation:</strong> Navigate freely between all 20 questions, change answers, or flag questions for review.</li>
                <li>📈 <strong>Detailed Score Report:</strong> Get a pass/fail grade (requires &ge; 60% to pass) and review mistakes with furigana explanations.</li>
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px", maxWidth: "400px", margin: "0 auto 32px" }}>
              <label style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text-secondary)", textAlign: "left" }}>Select Target Exam Level:</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                <button
                  type="button"
                  className={`btn ${level === 5 ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setLevel(5)}
                  style={{ height: "48px", fontWeight: "bold" }}
                >
                  N5 (Beginner)
                </button>
                <button
                  type="button"
                  className={`btn ${level === 4 ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setLevel(4)}
                  style={{ height: "48px", fontWeight: "bold" }}
                >
                  N4 (Basic)
                </button>
                <button
                  type="button"
                  className={`btn ${level === 3 ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setLevel(3)}
                  style={{ height: "48px", fontWeight: "bold" }}
                >
                  N3 (Intermediate)
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text-muted)", fontSize: "12px", marginTop: "4px" }}>
                <Clock size={14} />
                <span>N5: 20 mins | N4: 25 mins | N3: 30 mins (20 Questions total)</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => startExam(level)}
              style={{ width: "100%", maxWidth: "400px", padding: "14px 28px", fontSize: "16px", background: "#3b82f6", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)", marginBottom: "12px" }}
            >
              Start JLPT Mock Exam
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setView("dashboard")}
              style={{ width: "100%", maxWidth: "400px", padding: "12px 24px", fontSize: "14px" }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { questions, currentIdx, userAnswers, flagged, timeRemaining, examFinished, selectedLevel } = examState;
  const currentQuestion = questions[currentIdx];

  // ==========================================
  // VIEW: 2. EXAM ACTIVE SCREEN
  // ==========================================
  if (!examFinished) {
    const answeredCount = Object.keys(userAnswers).length;
    const isWarningTime = timeRemaining <= 120; // 2 minutes or less

    return (
      <div className="practice-view animate-fade-in">
        <div className="practice-container" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "24px" }}>
          
          {/* Main Question Panel */}
          <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "30px", position: "relative" }}>
            
            {/* Exam Header bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="tag" style={{ backgroundColor: "#3b82f6", color: "white", padding: "4px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
                  JLPT N{selectedLevel} Exam
                </span>
                <span style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                  Question {currentIdx + 1} of {questions.length}
                </span>
              </div>
              
              {/* Flag button */}
              <button
                type="button"
                className={`icon-btn ${flagged[currentQuestion.id] ? "flagged" : ""}`}
                onClick={toggleFlag}
                style={{
                  padding: "6px 12px",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "8px",
                  color: flagged[currentQuestion.id] ? "var(--color-kunyomi)" : "var(--color-text-secondary)",
                  backgroundColor: flagged[currentQuestion.id] ? "rgba(32, 201, 151, 0.1)" : "transparent",
                  border: flagged[currentQuestion.id] ? "1px solid rgba(32, 201, 151, 0.3)" : "1px solid var(--color-border)"
                }}
                title="Flag question to review later"
              >
                <Flag size={16} fill={flagged[currentQuestion.id] ? "var(--color-kunyomi)" : "none"} />
                <span>{flagged[currentQuestion.id] ? "Flagged for Review" : "Flag Question"}</span>
              </button>
            </div>

            {/* Question sentence - NO furigana to simulate real exam */}
            <div className="question-sentence" style={{ fontSize: "24px", minHeight: "80px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0" }}>
              {formatSentence(currentQuestion.sentence)}
            </div>

            <p className="question-text" style={{ fontSize: "15px", fontWeight: 500, color: "var(--color-text-secondary)", borderTop: "1px dashed var(--color-border)", paddingTop: "16px" }}>
              {currentQuestion.questionText}
            </p>

            {/* Options grid */}
            <div className="options-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "12px" }}>
              {currentQuestion.options.map((option, idx) => {
                const isSelected = userAnswers[currentQuestion.id] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    className={`option-button ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelectOption(option)}
                    style={isSelected ? { borderColor: "#3b82f6", backgroundColor: "rgba(59, 130, 246, 0.08)", color: "#3b82f6" } : {}}
                  >
                    <span className="option-badge" style={isSelected ? { backgroundColor: "#3b82f6", color: "white" } : {}}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="option-text">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", borderTop: "1px solid var(--color-border)", paddingTop: "20px" }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigateTo(currentIdx - 1)}
                disabled={currentIdx === 0}
                style={{ padding: "10px 20px" }}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={submitExam}
                style={{ backgroundColor: "var(--color-danger)", color: "white", padding: "10px 20px" }}
              >
                Submit Exam
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigateTo(currentIdx + 1)}
                disabled={currentIdx === questions.length - 1}
                style={{ padding: "10px 20px" }}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Side Panel: Exam Timer & Question Board */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Timer Card */}
            <div className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", color: isWarningTime ? "var(--color-danger)" : "var(--color-text-secondary)", marginBottom: "8px" }}>
                <Timer size={32} className={isWarningTime ? "animate-pulse" : ""} />
              </div>
              <div style={{ fontSize: "28px", fontWeight: "bold", fontFamily: "monospace", color: isWarningTime ? "var(--color-danger)" : "var(--color-text)" }}>
                {formatTime(timeRemaining)}
              </div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: 600, marginTop: "4px" }}>
                Time Remaining
              </div>
              
              <div style={{ marginTop: "12px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
                Answered: <strong>{answeredCount} / {questions.length}</strong>
              </div>
            </div>

            {/* Question Board Grid */}
            <div className="glass-card" style={{ padding: "20px" }}>
              <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: 600 }}>Question Board</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIdx;
                  const isAnswered = !!userAnswers[q.id];
                  const isFlagged = !!flagged[q.id];
                  
                  let bgColor = "var(--color-bg-surface-hover)";
                  let textColor = "var(--color-text-secondary)";
                  let border = "1px solid var(--color-border)";

                  if (isAnswered) {
                    bgColor = "rgba(59, 130, 246, 0.15)";
                    textColor = "#3b82f6";
                    border = "1px solid rgba(59, 130, 246, 0.3)";
                  }
                  if (isFlagged) {
                    bgColor = "rgba(32, 201, 151, 0.15)";
                    textColor = "var(--color-kunyomi)";
                    border = "1px solid rgba(32, 201, 151, 0.3)";
                  }
                  if (isCurrent) {
                    border = "2px solid var(--color-primary)";
                    textColor = "var(--color-primary)";
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => navigateTo(idx)}
                      style={{
                        height: "40px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: 600,
                        backgroundColor: bgColor,
                        color: textColor,
                        border: border,
                        cursor: "pointer",
                        position: "relative"
                      }}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <div style={{
                          position: "absolute",
                          top: "2px",
                          right: "2px",
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-kunyomi)"
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Grid Legends */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px", borderTop: "1px solid var(--color-border)", paddingTop: "12px", fontSize: "11px", color: "var(--color-text-muted)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "var(--color-bg-surface-hover)", border: "1px solid var(--color-border)" }} />
                  <span>Unanswered</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "rgba(59, 130, 246, 0.15)", border: "1px solid rgba(59, 130, 246, 0.3)" }} />
                  <span>Answered</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "rgba(32, 201, 151, 0.15)", border: "1px solid rgba(32, 201, 151, 0.3)" }} />
                  <span>Flagged for Review</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: 3. EXAM REPORT & RESULTS SCREEN
  // ==========================================
  // Calculate results
  const totalQuestions = questions.length;
  let correctCount = 0;
  questions.forEach((q) => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 60; // JLPT Mock pass mark = 60%

  return (
    <div className="practice-view animate-fade-in">
      <div className="practice-container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Results Banner */}
        <div className="glass-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", padding: "40px", alignItems: "center", textAlign: "left" }}>
          <div>
            <span className="tag" style={{ backgroundColor: "#3b82f6", color: "white", padding: "4px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
              Exam Results: JLPT N{selectedLevel}
            </span>
            <h1 style={{ marginTop: "12px", marginBottom: "8px" }}>
              {passed ? "🎉 Congratulations! You Passed!" : "😢 Keep Studying! You Failed"}
            </h1>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.5, margin: 0 }}>
              {passed 
                ? "Excellent job! You demonstrated strong comprehension under simulated testing conditions. You are ready to tackle the next difficulty level!" 
                : "A score of at least 60% is required to pass the mock exam. Review your incorrect answers below to learn key vocabulary and grammar rules."}
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => startExam(selectedLevel)}
                style={{ background: "#3b82f6", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <RotateCcw size={16} />
                <span>Retry Level N{selectedLevel}</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setExamState(null)}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <RotateCcw size={16} />
                <span>Change Level</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setView("dashboard")}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Home size={16} />
                <span>Dashboard</span>
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", borderLeft: "1px solid var(--color-border)", paddingLeft: "30px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "56px", fontWeight: "bold", color: passed ? "var(--color-success)" : "var(--color-danger)" }}>
                {percentage}%
              </div>
              <div style={{ fontSize: "13px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                Overall Score
              </div>
            </div>
            <div style={{ textAlign: "center", borderLeft: "1px dashed var(--color-border)", paddingLeft: "30px" }}>
              <div style={{ fontSize: "56px", fontWeight: "bold", color: "var(--color-text)" }}>
                {correctCount} / {totalQuestions}
              </div>
              <div style={{ fontSize: "13px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                Correct Answers
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Answer Review board */}
        <h2 style={{ fontSize: "16px", textTransform: "uppercase", color: "var(--color-text-muted)", letterSpacing: "0.05em", textAlign: "left", marginBottom: "0" }}>
          🔎 Question Review & Answer Key
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const wasFlagged = flagged[q.id];

            return (
              <div
                key={q.id}
                className="glass-card"
                style={{
                  padding: "24px",
                  borderLeft: `6px solid ${isCorrect ? "var(--color-success)" : "var(--color-danger)"}`,
                  textAlign: "left"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid var(--color-border)", paddingBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "15px" }}>Question {idx + 1}</span>
                    {isCorrect ? (
                      <span className="tag" style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>
                        Correct
                      </span>
                    ) : (
                      <span className="tag" style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", color: "#ef4444", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>
                        Incorrect
                      </span>
                    )}
                    <span style={{ fontSize: "12px", color: "var(--color-text-muted)", textTransform: "capitalize" }}>
                      ({q.type.replace("_", " ")})
                    </span>
                  </div>
                  {wasFlagged && (
                    <span style={{ fontSize: "11px", color: "var(--color-kunyomi)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Flag size={12} fill="var(--color-kunyomi)" />
                      <span>Flagged for Review</span>
                    </span>
                  )}
                </div>

                {/* Sentence with Furigana enabled in review mode */}
                <div style={{ fontSize: "20px", marginBottom: "12px", lineHeight: 1.8 }}>
                  {formatSentenceWithFurigana(q.sentence)}
                </div>

                <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "var(--color-text-secondary)" }}>
                  {q.questionText}
                </p>

                {/* Option Review Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  {q.options.map((option, optIdx) => {
                    const isSelected = userAnswer === option;
                    const isCorrectOption = q.correctAnswer === option;

                    let border = "1px solid var(--color-border)";
                    let bg = "transparent";
                    let color = "var(--color-text)";

                    if (isCorrectOption) {
                      border = "1px solid rgba(16, 185, 129, 0.4)";
                      bg = "rgba(16, 185, 129, 0.08)";
                      color = "#10b981";
                    } else if (isSelected && !isCorrect) {
                      border = "1px solid rgba(239, 68, 68, 0.4)";
                      bg = "rgba(239, 68, 68, 0.08)";
                      color = "#ef4444";
                    }

                    return (
                      <div
                        key={option}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border,
                          backgroundColor: bg,
                          color,
                          fontSize: "13px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        <span style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: isCorrectOption ? "#10b981" : (isSelected ? "#ef4444" : "var(--color-bg-surface-hover)"),
                          color: isCorrectOption || isSelected ? "white" : "var(--color-text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: "bold"
                        }}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                        {isCorrectOption && <span style={{ marginLeft: "auto", fontSize: "10px", fontWeight: "bold" }}>Correct Answer</span>}
                        {isSelected && !isCorrect && <span style={{ marginLeft: "auto", fontSize: "10px", fontWeight: "bold" }}>Your Choice</span>}
                        {isSelected && isCorrect && <span style={{ marginLeft: "auto", fontSize: "10px", fontWeight: "bold" }}>Your Choice (Correct)</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation block */}
                <div style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "var(--color-bg-surface-hover)",
                  border: "1px solid var(--color-border)",
                  fontSize: "13px",
                  color: "var(--color-text-secondary)"
                }}>
                  <div style={{ marginBottom: "6px" }}><strong>English Translation:</strong> "{q.englishTranslation}"</div>
                  <div><strong>Explanation:</strong> {q.explanation}</div>
                </div>

                {/* Subject Focus detail card */}
                <div className="glass-card" style={{ backgroundColor: "var(--color-bg-surface-solid)", padding: "14px", marginTop: "12px", border: "1px solid var(--color-border)", fontSize: "12px" }}>
                  <div style={{ fontWeight: 600, color: "var(--color-text)", marginBottom: "6px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "4px" }}>
                    📚 Subject Focus: <strong style={{ color: "var(--color-primary)" }}>{q.subject}</strong>
                  </div>
                  {renderSubjectExplanation(q.subject)}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
