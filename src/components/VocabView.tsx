import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Volume2, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import type { VocabSRSProgress, VocabStats } from "../hooks/useVocabSRS";

interface VocabViewProps {
  activeVocabList: VocabSRSProgress[];
  gradeVocab: (word: string, score: number) => void;
  startLearningVocab: (word: string) => void;
  vocabStats: VocabStats;
}

export const VocabView: React.FC<VocabViewProps> = ({
  activeVocabList,
  gradeVocab,
  startLearningVocab,
  vocabStats
}) => {
  const [selectedVocab, setSelectedVocab] = useState<VocabSRSProgress | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [lastGradedInfo, setLastGradedInfo] = useState<{ word: string; score: number; interval: number } | null>(null);

  // Sort: due words first, then new words, then others
  const sortedVocabList = [...activeVocabList].sort((a, b) => {
    const aDue = new Date(a.nextReviewDate).getTime() <= new Date().getTime() && a.box > 0;
    const bDue = new Date(b.nextReviewDate).getTime() <= new Date().getTime() && b.box > 0;
    
    if (aDue && !bDue) return -1;
    if (!aDue && bDue) return 1;

    if (a.box === 0 && b.box > 0) return -1;
    if (a.box > 0 && b.box === 0) return 1;

    return 0;
  });

  // Select the first item when the list changes
  useEffect(() => {
    if (sortedVocabList.length > 0 && !selectedVocab) {
      setSelectedVocab(sortedVocabList[0]);
    } else if (selectedVocab) {
      // Keep selected vocabulary references fresh
      const updated = sortedVocabList.find(v => v.word === selectedVocab.word);
      if (updated) setSelectedVocab(updated);
    }
  }, [activeVocabList.length, selectedVocab]);

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

  const handleGradeVocab = (score: number) => {
    if (!selectedVocab) return;

    // Reschedule
    gradeVocab(selectedVocab.word, score);
    
    // Toast notification settings
    setLastGradedInfo({
      word: selectedVocab.word,
      score,
      interval: score >= 3 ? Math.round(selectedVocab.interval * (score === 5 ? 2.5 : 1.5)) || 1 : 1
    });

    setTimeout(() => {
      setLastGradedInfo(null);
    }, 3000);

    // Auto flip back
    setIsFlipped(false);

    // Auto advance to next due word if reviewing
    const now = new Date().getTime();
    const remainingDue = sortedVocabList.filter(
      (v) => v.word !== selectedVocab.word && v.box > 0 && new Date(v.nextReviewDate).getTime() <= now
    );

    if (remainingDue.length > 0) {
      setSelectedVocab(remainingDue[0]);
    } else {
      // If no due words left, just advance to next standard vocab item in list
      const idx = sortedVocabList.findIndex((v) => v.word === selectedVocab.word);
      if (idx !== -1 && idx + 1 < sortedVocabList.length) {
        setSelectedVocab(sortedVocabList[idx + 1]);
      }
    }
  };

  if (activeVocabList.length === 0) {
    return (
      <div className="vocab-view animate-fade-in">
        <div className="view-header">
          <h1>Vocab Trainer</h1>
        </div>
        <div className="glass-card" style={{ textAlign: "center", padding: "64px 24px", maxWidth: "600px", margin: "40px auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <HelpCircle size={48} style={{ color: "var(--color-text-muted)" }} />
          </div>
          <h2>No Vocabulary Unlocked</h2>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "12px", lineHeight: 1.6 }}>
            Vocabulary words are unlocked automatically once you begin studying their corresponding Kanji. 
            Go to the <strong>Kanji Bank</strong> or the <strong>Writing Studio</strong> and click "Add to Review Queue" or grade a character to start learning it. This will automatically import all related vocabulary words here!
          </p>
        </div>
      </div>
    );
  }

  const isSelectedDue = selectedVocab 
    ? selectedVocab.box > 0 && new Date(selectedVocab.nextReviewDate).getTime() <= new Date().getTime()
    : false;

  return (
    <div className="vocab-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1>Vocab Trainer</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Review compound words containing Kanji you are actively studying.
          </p>
        </div>
      </div>

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
            <div style={{ fontWeight: 700, fontSize: "14px" }}>Graded {lastGradedInfo.word} with {lastGradedInfo.score}/5</div>
            <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
              Next review in {lastGradedInfo.interval} days.
            </div>
          </div>
        </div>
      )}

      <div className="writing-view-layout">
        {/* Left Side: Vocab List */}
        <div className="glass-card" style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "15px", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-muted)" }}>
            Study Pool ({activeVocabList.length})
          </h3>
          
          <div className="writing-kanji-list">
            {sortedVocabList.map((vocab) => {
              const now = new Date().getTime();
              const isDue = vocab.box > 0 && new Date(vocab.nextReviewDate).getTime() <= now;
              const isActive = selectedVocab?.word === vocab.word;

              return (
                <div
                  key={vocab.word}
                  className={`writing-kanji-item ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setSelectedVocab(vocab);
                    setIsFlipped(false);
                  }}
                >
                  <div className="writing-kanji-item-char kanji-text" style={{ fontSize: "18px" }}>
                    {vocab.word}
                  </div>
                  <div className="writing-kanji-item-meta" style={{ flexGrow: 1 }}>
                    <span className="writing-kanji-item-meaning" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "120px" }}>
                      {vocab.meaning}
                    </span>
                    <span className="writing-kanji-item-reading">
                      {vocab.reading}
                    </span>
                  </div>

                  {isDue ? (
                    <span className="tag tag-onyomi" style={{ fontSize: "9px" }}>Due</span>
                  ) : vocab.box > 0 ? (
                    <div 
                      className={`card-srs-indicator box-${vocab.box}`} 
                      style={{ position: "relative", top: 0, right: 0 }} 
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Flashcard and Study details */}
        {selectedVocab && (
          <div className="writing-studio-main" style={{ alignItems: "center" }}>
            
            {/* 3D Flip Flashcard Container */}
            <div 
              className="flashcard-wrapper"
              onClick={() => setIsFlipped(prev => !prev)}
            >
              <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
                {/* Front Side */}
                <div className="flashcard-front">
                  <span style={{ fontSize: "11px", textTransform: "uppercase", color: "var(--color-text-muted)", letterSpacing: "0.1em", position: "absolute", top: "20px" }}>
                    Vocabulary Word
                  </span>
                  <h1 className="kanji-text" style={{ fontSize: "56px", margin: "20px 0" }}>
                    {selectedVocab.word}
                  </h1>
                  <span style={{ fontSize: "12px", color: "var(--color-primary)", display: "flex", alignItems: "center", gap: "6px", position: "absolute", bottom: "24px" }}>
                    <span>Click card to reveal</span>
                    <ArrowRight size={14} />
                  </span>
                </div>

                {/* Back Side */}
                <div className="flashcard-back" onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: "flex", width: "100%", justifyContent: "space-between", position: "absolute", top: "20px", padding: "0 24px" }}>
                    <span className="tag tag-jlpt" style={{ fontSize: "10px" }}>
                      Kanji: {selectedVocab.kanjiRef}
                    </span>
                    <button
                      type="button"
                      className="speak-btn"
                      onClick={() => speakJapanese(selectedVocab.word)}
                      title="Speak word"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>

                  <div style={{ margin: "20px 0" }}>
                    <div style={{ fontSize: "18px", color: "var(--color-kunyomi)", fontFamily: "var(--font-japanese)", fontWeight: 500, marginBottom: "8px" }}>
                      {selectedVocab.reading}
                    </div>
                    <h2 style={{ fontSize: "28px", fontWeight: 700 }}>
                      {selectedVocab.meaning}
                    </h2>
                  </div>

                  <span 
                    onClick={() => setIsFlipped(false)}
                    style={{ fontSize: "11px", color: "var(--color-text-muted)", position: "absolute", bottom: "16px", cursor: "pointer" }}
                  >
                    Click to show front
                  </span>
                </div>
              </div>
            </div>

            {/* SRS Grading panel for Flashcard */}
            <div className="glass-card" style={{ width: "100%", maxWidth: "550px" }}>
              <h3>Spaced Repetition Review</h3>
              
              {selectedVocab.box === 0 ? (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginTop: "12px" }}>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                    This vocabulary word is currently "New". Click to add it to reviews.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => startLearningVocab(selectedVocab.word)}
                  >
                    Start Learning
                  </button>
                </div>
              ) : (
                <div style={{ marginTop: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "14px" }}>
                    <span>Mastery Level: <strong>Box {selectedVocab.box}</strong></span>
                    {isSelectedDue ? (
                      <span className="tag tag-onyomi" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <AlertCircle size={12} />
                        <span>Review Due</span>
                      </span>
                    ) : (
                      <span>Next review: {new Date(selectedVocab.nextReviewDate).toLocaleDateString()}</span>
                    )}
                  </div>

                  <div className="srs-grade-buttons-container" style={{ marginTop: 0 }}>
                    <span className="srs-grade-buttons-label">Rate your recall of this word:</span>
                    <div className="srs-grade-buttons-grid">
                      {[0, 1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          type="button"
                          className={`grade-btn grade-${score}`}
                          onClick={() => handleGradeVocab(score)}
                        >
                          <span className="grade-btn-num">{score}</span>
                          <span className="grade-btn-lbl">
                            {score === 0 ? "Blank" : score === 2 ? "Hard" : score === 4 ? "Good" : score === 5 ? "Easy" : ""}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
