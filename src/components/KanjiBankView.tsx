import React, { useState, useEffect } from "react";
import { Search, X, Volume2, Plus, Check, GraduationCap } from "lucide-react";
import { KANJI_DATASET } from "../data/kanji";
import type { KanjiItem } from "../data/kanji";
import type { SRSProgress, SRSStats } from "../hooks/useSRS";
import { CanvasPad } from "./CanvasPad";

interface KanjiBankViewProps {
  getKanjiProgress: (kanji: string) => SRSProgress;
  gradeKanji: (kanji: string, score: number) => void;
  startLearning: (kanji: string) => void;
}

export const KanjiBankView: React.FC<KanjiBankViewProps> = ({
  getKanjiProgress,
  gradeKanji,
  startLearning
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStrokeFilter, setSelectedStrokeFilter] = useState<string>("all");
  const [selectedBoxFilter, setSelectedBoxFilter] = useState<string>("all");
  const [activeKanji, setActiveKanji] = useState<KanjiItem | null>(null);

  // Setup TTS voice loading (browser voices can load asynchronously)
  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const speakJapanese = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85; // slightly slower for learners

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find((voice) => voice.lang.includes("ja-JP") || voice.lang.startsWith("ja"));
    if (jaVoice) {
      utterance.voice = jaVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  // Filter the Kanji dataset based on search inputs and filter selections
  const filteredKanji = KANJI_DATASET.filter((item) => {
    const progress = getKanjiProgress(item.kanji);
    
    // Search matching
    const matchesSearch =
      item.kanji.includes(searchTerm) ||
      item.meanings.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.onyomi.some((o) => o.includes(searchTerm)) ||
      item.kunyomi.some((k) => k.includes(searchTerm));

    // Stroke filter matching
    const matchesStrokes =
      selectedStrokeFilter === "all" || item.strokeCount === parseInt(selectedStrokeFilter, 10);

    // SRS Box filter matching
    let matchesBox = true;
    if (selectedBoxFilter !== "all") {
      const boxFilterVal = parseInt(selectedBoxFilter, 10);
      if (boxFilterVal === 0) {
        matchesBox = progress.box === 0;
      } else if (boxFilterVal === 1) {
        matchesBox = progress.box >= 1 && progress.box <= 4; // Learning
      } else if (boxFilterVal === 5) {
        matchesBox = progress.box === 5; // Mastered
      }
    }

    return matchesSearch && matchesStrokes && matchesBox;
  });

  const handleSelfGrade = (score: number) => {
    if (activeKanji) {
      gradeKanji(activeKanji.kanji, score);
      // Brief feedback toast would be nice, or just let state update
    }
  };

  return (
    <div className="kanji-bank-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1>Kanji Bank</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Explore characters, hear pronunciation examples, and trace layouts.
          </p>
        </div>
      </div>

      {/* Filter and Search Interface */}
      <div className="search-filter-bar">
        <div className="search-input-container">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search by Kanji, English meaning, Onyomi, Kunyomi..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="speak-btn"
              onClick={() => setSearchTerm("")}
              style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        <select
          className="filter-select"
          value={selectedStrokeFilter}
          onChange={(e) => setSelectedStrokeFilter(e.target.value)}
        >
          <option value="all">All Stroke Counts</option>
          <option value="2">2 Strokes</option>
          <option value="3">3 Strokes</option>
          <option value="4">4 Strokes</option>
          <option value="5">5 Strokes</option>
          <option value="6">6 Strokes</option>
          <option value="7">7 Strokes</option>
          <option value="8">8 Strokes</option>
          <option value="9">9 Strokes</option>
          <option value="10">10 Strokes</option>
          <option value="12">12 Strokes</option>
        </select>

        <select
          className="filter-select"
          value={selectedBoxFilter}
          onChange={(e) => setSelectedBoxFilter(e.target.value)}
        >
          <option value="all">All Mastery Levels</option>
          <option value="0">New (Unstudied)</option>
          <option value="1">Learning (Box 1-4)</option>
          <option value="5">Mastered (Box 5)</option>
        </select>
      </div>

      {/* Grid of cards */}
      {filteredKanji.length > 0 ? (
        <div className="kanji-grid">
          {filteredKanji.map((item) => {
            const progress = getKanjiProgress(item.kanji);
            return (
              <div
                key={item.kanji}
                className="glass-card kanji-card"
                onClick={() => setActiveKanji(item)}
              >
                <div className={`card-srs-indicator box-${progress.box}`} />
                <span className="tag tag-jlpt card-jlpt-tag">N{item.jlpt}</span>
                <span className="char kanji-text">{item.kanji}</span>
                <span className="meaning">{item.meanings[0]}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="glass-card" style={{ textAlign: "center", padding: "48px 24px" }}>
          <p style={{ color: "var(--color-text-secondary)" }}>No Kanji matched your query. Try resetting filters.</p>
        </div>
      )}

      {/* Kanji Details Modal */}
      {activeKanji && (
        <div className="modal-overlay" onClick={() => setActiveKanji(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Kanji Details</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => setActiveKanji(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="kanji-detail-layout">
                {/* Left Side: Character Card & Canvas */}
                <div className="kanji-detail-left">
                  <div className="kanji-huge-card">
                    <span className="char kanji-text">{activeKanji.kanji}</span>
                    <div className="meta">
                      <span className="tag tag-jlpt">JLPT N{activeKanji.jlpt}</span>
                      <span className="tag tag-jlpt" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-secondary)" }}>
                        {activeKanji.strokeCount} Strokes
                      </span>
                    </div>
                  </div>

                  {/* Tracing Canvas */}
                  <CanvasPad kanji={activeKanji.kanji} />
                </div>

                {/* Right Side: Readings, Vocabulary, & SRS Actions */}
                <div className="kanji-detail-right">
                  <div>
                    <h4 style={{ textTransform: "uppercase", fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "6px" }}>Meanings</h4>
                    <p className="meanings-list">{activeKanji.meanings.join(", ")}</p>
                  </div>

                  <div className="readings-container">
                    <div className="reading-row">
                      <span className="lbl">Onyomi</span>
                      <div className="reading-chips">
                        {activeKanji.onyomi.length > 0 ? (
                          activeKanji.onyomi.map((on) => (
                            <span key={on} className="reading-chip tag-onyomi">{on}</span>
                          ))
                        ) : (
                          <span style={{ color: "var(--color-text-muted)", fontSize: "13px" }}>None</span>
                        )}
                      </div>
                    </div>
                    <div className="reading-row">
                      <span className="lbl">Kunyomi</span>
                      <div className="reading-chips">
                        {activeKanji.kunyomi.length > 0 ? (
                          activeKanji.kunyomi.map((kun) => (
                            <span key={kun} className="reading-chip tag-kunyomi">{kun}</span>
                          ))
                        ) : (
                          <span style={{ color: "var(--color-text-muted)", fontSize: "13px" }}>None</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SRS Progress controls */}
                  <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "16px" }}>
                    <h4 style={{ textTransform: "uppercase", fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "10px" }}>Study State</h4>
                    {getKanjiProgress(activeKanji.kanji).box === 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => startLearning(activeKanji.kanji)}
                        style={{ width: "100%" }}
                      >
                        <Plus size={16} />
                        <span>Add to active review queue</span>
                      </button>
                    ) : (
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", fontSize: "13px" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <Check size={16} style={{ color: "var(--color-kunyomi)" }} />
                            <span>Currently studying (Box {getKanjiProgress(activeKanji.kanji).box})</span>
                          </span>
                          <span style={{ color: "var(--color-text-muted)" }}>
                            Interval: {getKanjiProgress(activeKanji.kanji).interval}d
                          </span>
                        </div>
                        
                        {/* Rapid grading for canvas practice */}
                        <div className="srs-grade-buttons-container">
                          <span className="srs-grade-buttons-label">Rate your drawing to review:</span>
                          <div className="srs-grade-buttons-grid">
                            {[0, 1, 2, 3, 4, 5].map((score) => (
                              <button
                                key={score}
                                type="button"
                                className={`grade-btn grade-${score}`}
                                onClick={() => handleSelfGrade(score)}
                              >
                                <span className="grade-btn-num">{score}</span>
                                <span className="grade-btn-lbl">
                                  {score === 0 ? "Forget" : score === 3 ? "Good" : score === 5 ? "Easy" : ""}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Vocabulary Section */}
                  <div className="vocab-section">
                    <h4 style={{ textTransform: "uppercase", fontSize: "11px", color: "var(--color-text-muted)" }}>Common Vocabulary</h4>
                    <div className="vocab-list">
                      {activeKanji.examples.map((ex) => (
                        <div key={ex.word} className="vocab-item">
                          <div className="vocab-japanese">
                            <span className="vocab-reading">{ex.reading}</span>
                            <span className="vocab-word">{ex.word}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span className="vocab-english">{ex.meaning}</span>
                            <button
                              type="button"
                              className="speak-btn"
                              onClick={() => speakJapanese(ex.word)}
                              title="Hear pronunciation"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
