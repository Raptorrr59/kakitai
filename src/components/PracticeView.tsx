import React, { useState } from "react";
import { Award, Volume2, ArrowRight, CheckCircle2, XCircle, RotateCcw, Home } from "lucide-react";
import { PRACTICE_QUESTIONS } from "../data/questions";
import type { Question } from "../data/questions";

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

  // Helper to Speak Japanese sentences
  const speakJapanese = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    // Strip bold markers '**' or blanks '[ ]' for natural reading
    const cleanText = text.replace(/\*\*/g, "").replace(/\[\s*\]/g, " ");
    
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
    // Shuffle and pick 10 random questions from our pool
    const shuffled = [...PRACTICE_QUESTIONS].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
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

  // Render question text in styled Japanese (support bold markdown blocks)
  const formatSentence = (sentenceText: string) => {
    const parts = sentenceText.split("**");
    return parts.map((part, index) => {
      // odd indices are inside **...**
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
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
            <h1 style={{ textAlign: "center", marginBottom: "12px" }}>TOEIC Kanji Practice Arena</h1>
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
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
              <button
                type="button"
                className="speak-btn"
                onClick={() => speakJapanese(currentQuestion.sentence)}
                title="Speak sentence"
                style={{ width: "36px", height: "36px" }}
              >
                <Volume2 size={20} />
              </button>
            </div>

            <div className="question-sentence">
              {formatSentence(currentQuestion.sentence)}
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
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                        <span className="kanji-text" style={{ fontSize: "15px", fontWeight: 600 }}>
                          {q.sentence.replace(/\*\*/g, "")}
                        </span>
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
