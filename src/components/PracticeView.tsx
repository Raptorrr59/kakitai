import React, { useState } from "react";
import { Award, Volume2, ArrowRight, CheckCircle2, XCircle, RotateCcw, Home, Eye, EyeOff } from "lucide-react";
import { PRACTICE_QUESTIONS } from "../data/questions";
import type { Question } from "../data/questions";
import { usePracticeProgress } from "../hooks/usePracticeProgress";

interface PracticeViewProps {
  setView: (view: string) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ setView }) => {
  const [sessionActive, setSessionActive] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, { answer: string; isCorrect: boolean }>>({});
  const [showFurigana, setShowFurigana] = useState(true);

  const {
    scores,
    getScore,
    isLearned,
    updateScores,
    getStats: getPracticeStats,
    resetProgress: resetPracticeProgress
  } = usePracticeProgress();

  // Weighted sampling of questions based on learned status
  const getWeightedQuestions = (count: number): Question[] => {
    const weighted = PRACTICE_QUESTIONS.map((q) => {
      const currentScore = scores[q.subject] || 0;
      const learned = currentScore >= 10;
      // Learned items appear much less frequently (weight 0.15 vs 1.0)
      const weight = learned ? 0.15 : 1.0;
      return { q, weight };
    });

    const selected: Question[] = [];
    const pool = [...weighted];

    for (let i = 0; i < count && pool.length > 0; i++) {
      const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);
      if (totalWeight === 0) {
        const idx = Math.floor(Math.random() * pool.length);
        selected.push(pool[idx].q);
        pool.splice(idx, 1);
        continue;
      }

      let r = Math.random() * totalWeight;
      let selectedIdx = 0;
      for (let j = 0; j < pool.length; j++) {
        r -= pool[j].weight;
        if (r <= 0) {
          selectedIdx = j;
          break;
        }
      }

      selected.push(pool[selectedIdx].q);
      pool.splice(selectedIdx, 1);
    }

    return selected;
  };

  // Helper to Speak Japanese sentences
  const speakJapanese = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    // Strip furigana markers '漢字{かんじ}', bold markers '**', or blanks '[ ]' for natural reading
    const cleanText = text.replace(/\{[^}]*\}/g, "").replace(/\*\*/g, "").replace(/\[\s*\]/g, " ");
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "ja-JP";
    utterance.rate = 0.8; // slower speaking speed for comprehension practice

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find((voice) => voice.lang.includes("ja-JP") || voice.lang.startsWith("ja"));
    if (jaVoice) {
      utterance.voice = jaVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  const startSession = () => {
    // Perform weighted sampling based on Practice Arena scores
    const selected = getWeightedQuestions(10).map((q) => {
      // Create a shallow copy of the question and shuffle its options array
      const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
      return {
        ...q,
        options: shuffledOptions
      };
    });
    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers({});
    setSessionActive(true);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = option === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Update the custom practice scores in database
    updateScores(currentQuestion.subject, currentQuestion.sentence, isCorrect);

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        answer: option,
        isCorrect
      }
    }));
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentIndex];
  const finished = sessionActive && currentIndex >= questions.length;

  // Render question text in styled Japanese (support bold markdown blocks and furigana tags)
  const formatSentence = (sentenceText: string, forceHideFurigana: boolean = false) => {
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
        const displayFurigana = showFurigana && !forceHideFurigana;
        renderedPart.push(
          <ruby key={matchIndex}>
            {baseWord}
            {displayFurigana && <rt style={{ fontSize: "0.55em", color: "var(--color-primary)", display: "block" }}>{reading}</rt>}
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

  return (
    <div className="practice-view animate-fade-in">
      {!sessionActive && (
        <div className="practice-container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="glass-card" style={{ textGrid: "center", padding: "40px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <div className="stat-icon-wrapper purple" style={{ width: "64px", height: "64px", borderRadius: "50%" }}>
                <Award size={32} />
              </div>
            </div>
            <h1 style={{ textAlign: "center", marginBottom: "12px" }}>Kakitai Practice Arena</h1>
            <p style={{ color: "var(--color-text-secondary)", textAlign: "center", lineHeight: 1.6, marginBottom: "28px" }}>
              Test your writing comprehension, reading context, and sentence vocabulary. 
              Each session contains 10 randomized multiple-choice questions assessing readings, meanings, and spelling context.
            </p>

            <div className="glass-card" style={{ backgroundColor: "var(--color-bg-surface-solid)", border: "1px dashed var(--color-border)", marginBottom: "28px" }}>
              <h3 style={{ marginBottom: "10px" }}>Quiz Layout:</h3>
              <ul style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>📚 <strong>Reading Comprehension:</strong> Identify correct furigana readings.</li>
                <li>📝 <strong>Cloze Sentence:</strong> Fill in blanks with contextually correct Kanji.</li>
                <li>✏️ <strong>Kanji Selection:</strong> Match Hiragana writing with proper Kanji spellings.</li>
                <li>🗣️ <strong>Listening Prep:</strong> Click the speaker icon to play native pronunciation audio.</li>
              </ul>
            </div>

            {/* Practice progress dashboard */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>
              <div className="glass-card" style={{ padding: "16px", textAlign: "center", backgroundColor: "var(--color-bg-surface-solid)" }}>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "#10b981", marginBottom: "4px" }}>
                  {getPracticeStats().learnedCount}
                </div>
                <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase", fontWeight: 600 }}>
                  ✨ Items Learned
                </div>
              </div>
              <div className="glass-card" style={{ padding: "16px", textAlign: "center", backgroundColor: "var(--color-bg-surface-solid)" }}>
                <div style={{ fontSize: "28px", fontWeight: "bold", color: "var(--color-primary)", marginBottom: "4px" }}>
                  {getPracticeStats().inProgressCount}
                </div>
                <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase", fontWeight: 600 }}>
                  📈 In Progress
                </div>
              </div>
            </div>

            {(getPracticeStats().learnedCount > 0 || getPracticeStats().inProgressCount > 0) && (
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to reset all Practice Arena scores? This cannot be undone.")) {
                      resetPracticeProgress();
                    }
                  }}
                  style={{ padding: "8px 16px", fontSize: "12px", color: "var(--color-danger)" }}
                >
                  Reset Practice Scores
                </button>
              </div>
            )}

            <button
              type="button"
              className="btn btn-primary"
              onClick={startSession}
              style={{ width: "100%", padding: "14px 28px", fontSize: "16px" }}
            >
              Start Practice Session
            </button>
          </div>
        </div>
      )}

      {sessionActive && !finished && currentQuestion && (
        <div className="practice-container">
          <div className="quiz-progress-container">
            <div className="quiz-progress-header">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span>Score: {score} / {currentIndex}</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fg"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="glass-card question-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--color-border)", paddingBottom: "12px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                <span className="tag tag-jlpt">N{currentQuestion.level}</span>
                {isLearned(currentQuestion.subject) ? (
                  <span className="tag" style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)" }}>✨ Learned</span>
                ) : (
                  <span className="tag" style={{ backgroundColor: "var(--color-bg-surface-hover)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}>📈 Score: {getScore(currentQuestion.subject)}/10</span>
                )}
                <span className="label" style={{ fontSize: "12px" }}>
                  {currentQuestion.type === "kanji_select" ? "Kanji Selection" :
                   currentQuestion.type === "cloze" ? "Cloze Sentence" :
                   currentQuestion.type === "reading" ? "Reading" :
                   currentQuestion.type === "meaning" ? "Meaning" :
                   currentQuestion.type === "translate_jp_en" ? "JP → EN Translation" :
                   currentQuestion.type === "translate_en_jp" ? "EN → JP Translation" : 
                   currentQuestion.type}
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {currentQuestion.type !== "reading" && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowFurigana((prev) => !prev)}
                    style={{
                      padding: "6px 12px",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      height: "36px",
                      borderRadius: "8px"
                    }}
                    title="Toggle Furigana reading hints"
                  >
                    {showFurigana ? <EyeOff size={16} /> : <Eye size={16} />}
                    <span>{showFurigana ? "Hide Furigana" : "Show Furigana"}</span>
                  </button>
                )}
                <button
                  type="button"
                  className="speak-btn"
                  onClick={() => {
                    if (currentQuestion.type === "translate_en_jp") {
                      speakJapanese(currentQuestion.correctAnswer);
                    } else {
                      speakJapanese(currentQuestion.sentence);
                    }
                  }}
                  title="Speak sentence"
                  style={{ width: "36px", height: "36px" }}
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>

            <div className="question-sentence">
              {formatSentence(currentQuestion.sentence, currentQuestion.type === "reading")}
            </div>

            <p className="question-text">
              {currentQuestion.questionText}
            </p>

            <div className="options-grid">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                
                let btnClass = "";
                if (isAnswered) {
                  if (isCorrect) btnClass = "correct";
                  else if (isSelected) btnClass = "incorrect";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    className={`option-button ${btnClass}`}
                    onClick={() => handleSelectOption(option)}
                    disabled={isAnswered}
                  >
                    <span className="option-badge">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="option-text">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Correct/Incorrect explanation panel */}
            {isAnswered && (
              <div className={`feedback-card ${selectedAnswer === currentQuestion.correctAnswer ? "correct" : "incorrect"}`}>
                <h4 className="feedback-title">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 size={18} style={{ color: "var(--color-success)" }} />
                      <span>Correct Response!</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} style={{ color: "var(--color-danger)" }} />
                      <span>Incorrect Response</span>
                    </>
                  )}
                </h4>
                <p className="feedback-desc">{currentQuestion.explanation}</p>
                <p className="feedback-translation">
                  <strong>English:</strong> "{currentQuestion.englishTranslation}"
                </p>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextQuestion}
                  >
                    <span>{currentIndex + 1 === questions.length ? "Finish Quiz" : "Next Question"}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {finished && (
        <div className="practice-container">
          <div className="glass-card result-card">
            <h2>Practice Complete! 🎉</h2>
            <p style={{ color: "var(--color-text-secondary)", marginTop: "8px", marginBottom: "32px" }}>
              Great effort! Review your metrics and look over the items.
            </p>

            <div className="result-circle-container">
              <div className="result-circle">
                <span className="result-score">{score} / {questions.length}</span>
                <span className="result-total">Correct</span>
              </div>
            </div>

            <div className="result-percentage">
              Accuracy: {Math.round((score / questions.length) * 100)}%
            </div>

            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "36px", maxW: "500px", margin: "0 auto 36px auto" }}>
              {score === questions.length
                ? "Incredible work! A perfect score. You have fully internalized these Kanji spellings and vocabulary meanings."
                : score >= 7
                ? "Well done! You have a solid grasp of these basic N5 Japanese Kanji. Keep studying to reach 100%!"
                : "Good attempt! Kanji can be tricky to read and write. Review the vocabulary list in the Bank and try again."}
            </p>

            {/* Itemized review checklist */}
            <div className="glass-card" style={{ backgroundColor: "var(--color-bg-surface-solid)", padding: "16px", marginBottom: "36px" }}>
              <h3 style={{ marginBottom: "16px", fontSize: "16px", textAlign: "left" }}>Answer Summary:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {questions.map((q) => {
                  const ua = userAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid var(--color-border)",
                        fontSize: "14px",
                        backgroundColor: "var(--color-bg-surface)"
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px", flex: 1 }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                          <span className="tag tag-jlpt" style={{ fontSize: "9px", padding: "1px 4px" }}>N{q.level}</span>
                          {isLearned(q.subject) ? (
                            <span className="tag" style={{ fontSize: "9px", padding: "1px 4px", backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)" }}>✨ Learned</span>
                          ) : (
                            <span className="tag" style={{ fontSize: "9px", padding: "1px 4px", backgroundColor: "var(--color-bg-surface-hover)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}>📈 Score: {getScore(q.subject)}/10</span>
                          )}
                          <span className="kanji-text" style={{ fontSize: "15px", fontWeight: 600, display: "flex", gap: "2px", flexWrap: "wrap", lineHeight: "1.8" }}>
                            {formatSentence(q.sentence)}
                          </span>
                        </div>
                        <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
                          Correct: {q.correctAnswer} | Yours: {ua?.answer}
                        </span>
                      </div>
                      <div>
                        {ua?.isCorrect ? (
                          <CheckCircle2 size={18} style={{ color: "var(--color-success)" }} />
                        ) : (
                          <XCircle size={18} style={{ color: "var(--color-danger)" }} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setView("dashboard")}
              >
                <Home size={16} />
                <span>Go to Dashboard</span>
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={startSession}
              >
                <RotateCcw size={16} />
                <span>Practice Again</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
