import React, { useState } from "react";
import { Plus, Trash2, Check, Sparkles, FolderOpen, Search, X } from "lucide-react";
import { KANJI_DATASET } from "../data/kanji";
import type { KanjiPreset } from "../hooks/usePresets";
import type { SRSProgress } from "../hooks/useSRS";

interface PresetsViewProps {
  presets: KanjiPreset[];
  createPreset: (name: string, description: string, kanjiList: string[]) => void;
  deletePreset: (id: string) => void;
  activatePreset: (
    id: string,
    startLearningMultiple: (kanjiList: string[]) => void,
    getKanjiProgress: (kanji: string) => SRSProgress
  ) => number;
  startLearningMultiple: (kanjiList: string[]) => void;
  getKanjiProgress: (kanji: string) => SRSProgress;
}

export const PresetsView: React.FC<PresetsViewProps> = ({
  presets,
  createPreset,
  deletePreset,
  activatePreset,
  startLearningMultiple,
  getKanjiProgress
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(presets[0]?.id || "");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPresetName, setNewPresetName] = useState("");
  const [newPresetDesc, setNewPresetDesc] = useState("");
  const [selectedKanjiSet, setSelectedKanjiSet] = useState<Set<string>>(new Set());
  
  // Custom Preset creator filters
  const [creatorSearch, setCreatorSearch] = useState("");
  const [creatorJlptTab, setCreatorJlptTab] = useState<number | "all">("all");

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedPreset = presets.find((p) => p.id === selectedPresetId);

  const handleActivate = (id: string) => {
    const addedCount = activatePreset(id, startLearningMultiple, getKanjiProgress);
    triggerToast(`Added ${addedCount} Kanji from "${selectedPreset?.name}" to your reviews!`);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleToggleCreatorKanji = (char: string) => {
    setSelectedKanjiSet((prev) => {
      const next = new Set(prev);
      if (next.has(char)) {
        next.delete(char);
      } else {
        next.add(char);
      }
      return next;
    });
  };

  const handleSavePreset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPresetName.trim()) return;
    if (selectedKanjiSet.size === 0) {
      alert("Please select at least one Kanji to create a preset.");
      return;
    }

    createPreset(newPresetName, newPresetDesc, Array.from(selectedKanjiSet));
    
    // Reset Form
    setNewPresetName("");
    setNewPresetDesc("");
    setSelectedKanjiSet(new Set());
    setShowCreateModal(false);
    triggerToast("Custom study set created successfully!");
  };

  // Filter Kanji list in the creator modal
  const filteredCreatorKanji = KANJI_DATASET.filter((k) => {
    const matchesSearch = k.kanji.includes(creatorSearch) || k.meanings.some(m => m.toLowerCase().includes(creatorSearch.toLowerCase()));
    const matchesTab = creatorJlptTab === "all" || k.jlpt === creatorJlptTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="presets-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1>Study Sets & Presets</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Add entire Kanji lists to your active SRS review queue at once.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowCreateModal(true)}
        >
          <Plus size={16} />
          <span>Create Study Set</span>
        </button>
      </div>

      {toastMessage && (
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
          <span style={{ fontWeight: 600, fontSize: "14px" }}>{toastMessage}</span>
        </div>
      )}

      <div className="writing-view-layout">
        {/* Left Side: Preset List */}
        <div className="glass-card" style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "15px", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-muted)" }}>
            Available Lists
          </h3>
          
          <div className="writing-kanji-list" style={{ maxHeight: "calc(100vh - 200px)" }}>
            {presets.map((preset) => {
              const isActive = preset.id === selectedPresetId;
              
              // Count already unlocked kanji in this preset
              const unlockedCount = preset.kanjiList.filter(
                (char) => getKanjiProgress(char).box > 0
              ).length;

              return (
                <div
                  key={preset.id}
                  className={`writing-kanji-item ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedPresetId(preset.id)}
                >
                  <div className="writing-kanji-item-char" style={{ fontSize: "18px", color: preset.isBuiltIn ? "var(--color-primary)" : "var(--color-kunyomi)" }}>
                    <FolderOpen size={20} />
                  </div>
                  <div className="writing-kanji-item-meta" style={{ flexGrow: 1 }}>
                    <span className="writing-kanji-item-meaning">{preset.name}</span>
                    <span className="writing-kanji-item-reading">
                      {preset.kanjiList.length} Kanji ({Math.round((unlockedCount / preset.kanjiList.length) * 100)}% active)
                    </span>
                  </div>

                  {!preset.isBuiltIn && (
                    <button
                      type="button"
                      className="speak-btn"
                      style={{ color: "var(--color-danger)" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Are you sure you want to delete "${preset.name}"?`)) {
                          deletePreset(preset.id);
                          if (selectedPresetId === preset.id) {
                            setSelectedPresetId(presets[0]?.id || "");
                          }
                        }
                      }}
                      title="Delete Preset"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Selected Preset Detail & Grid */}
        {selectedPreset && (
          <div className="writing-studio-main">
            <div className="glass-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <h2>{selectedPreset.name}</h2>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", marginTop: "6px", lineHeight: 1.5 }}>
                    {selectedPreset.description}
                  </p>
                </div>
                
                <span className="tag tag-jlpt" style={{ padding: "6px 12px", fontSize: "13px", height: "auto" }}>
                  {selectedPreset.kanjiList.length} Characters
                </span>
              </div>

              {/* Unlock Info / Progress Bar */}
              {(() => {
                const activeCount = selectedPreset.kanjiList.filter(
                  (char) => getKanjiProgress(char).box > 0
                ).length;
                const percentage = Math.round((activeCount / selectedPreset.kanjiList.length) * 100);
                const allActive = activeCount === selectedPreset.kanjiList.length;

                return (
                  <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--color-text-secondary)" }}>
                      <span>Reviews activated: <strong>{activeCount} / {selectedPreset.kanjiList.length}</strong></span>
                      <span>{percentage}% Completed</span>
                    </div>

                    <div className="progress-bar-bg" style={{ height: "6px" }}>
                      <div className="progress-bar-fg" style={{ width: `${percentage}%`, background: allActive ? "var(--color-success)" : "var(--color-primary)" }} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={allActive}
                        onClick={() => handleActivate(selectedPreset.id)}
                      >
                        {allActive ? (
                          <>
                            <Check size={16} />
                            <span>All Added to Reviews</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={16} />
                            <span>Activate study queue ({selectedPreset.kanjiList.length - activeCount} new)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Kanji Character Grid */}
            <div className="glass-card">
              <h3 style={{ marginBottom: "16px" }}>Included Kanji</h3>
              <div className="kanji-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))", gap: "10px" }}>
                {selectedPreset.kanjiList.map((char) => {
                  const progress = getKanjiProgress(char);
                  const isStudying = progress.box > 0;
                  const kanjiDetails = KANJI_DATASET.find((k) => k.kanji === char);

                  return (
                    <div
                      key={char}
                      className="glass-card"
                      style={{
                        padding: "12px 6px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: isStudying ? "2px" : "1px",
                        borderColor: isStudying ? "var(--color-kunyomi)" : "var(--color-border)",
                        boxShadow: isStudying ? "0 0 8px rgba(32, 201, 151, 0.15)" : "none",
                        position: "relative"
                      }}
                      title={`${kanjiDetails?.meanings.join(", ") || ""}`}
                    >
                      <span className="kanji-text" style={{ fontSize: "22px", color: isStudying ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>{char}</span>
                      <span style={{ fontSize: "9px", color: "var(--color-text-muted)", marginTop: "4px", textTransform: "capitalize" }}>
                        {kanjiDetails?.meanings[0] || ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Custom Preset Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "650px" }}>
            <div className="modal-header">
              <h2>Create Custom Study Set</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSavePreset} className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label className="label">Study Set Name:</label>
                <input
                  type="text"
                  placeholder="e.g. Days of the week, My Criticals..."
                  className="search-input"
                  value={newPresetName}
                  onChange={(e) => setNewPresetName(e.target.value)}
                  required
                  style={{ paddingLeft: "16px" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label className="label">Description (Optional):</label>
                <textarea
                  placeholder="What is this set for?"
                  className="search-input"
                  value={newPresetDesc}
                  onChange={(e) => setNewPresetDesc(e.target.value)}
                  style={{ paddingLeft: "16px", minHeight: "60px", resize: "vertical", fontFamily: "var(--font-sans)" }}
                />
              </div>

              {/* Character selection panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label className="label">Select Kanji ({selectedKanjiSet.size} selected):</label>
                  
                  {/* Select N5/N4/N3 Tabs */}
                  <div style={{ display: "flex", gap: "6px" }}>
                    {["all", 5, 4, 3].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        className={`icon-btn ${creatorJlptTab === lvl ? "active" : ""}`}
                        style={{ padding: "4px 8px", fontSize: "10px" }}
                        onClick={() => setCreatorJlptTab(lvl as any)}
                      >
                        {lvl === "all" ? "All Levels" : `N${lvl}`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="search-input-container" style={{ margin: 0 }}>
                  <Search size={16} />
                  <input
                    type="text"
                    placeholder="Search characters to select..."
                    className="search-input"
                    value={creatorSearch}
                    onChange={(e) => setCreatorSearch(e.target.value)}
                    style={{ padding: "8px 12px 8px 36px", fontSize: "13px" }}
                  />
                </div>

                {/* Character Picker Grid */}
                <div className="preset-selector-grid">
                  {filteredCreatorKanji.map((k) => {
                    const isChecked = selectedKanjiSet.has(k.kanji);
                    return (
                      <button
                        key={k.kanji}
                        type="button"
                        className={`preset-char-select-btn ${isChecked ? "selected" : ""}`}
                        onClick={() => handleToggleCreatorKanji(k.kanji)}
                        title={`${k.kanji} - ${k.meanings.join(", ")}`}
                      >
                        {k.kanji}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", borderTop: "1px solid var(--color-border)", paddingTop: "14px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!newPresetName.trim() || selectedKanjiSet.size === 0}
                >
                  Save Study Set
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
