import React from "react";
import { BookOpen, Award, CheckCircle2, AlertCircle, Edit3, Calendar, GraduationCap, FolderOpen, Trash2 } from "lucide-react";
import type { SRSStats } from "../hooks/useSRS";
import type { VocabStats } from "../hooks/useVocabSRS";
import { KANJI_DATASET } from "../data/kanji";

interface DashboardViewProps {
  stats: SRSStats;
  vocabStats: VocabStats;
  setView: (view: string) => void;
  onClearQueue: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ stats, vocabStats, setView }) => {
  const totalKanji = KANJI_DATASET.length;
  const learnedCount = totalKanji - stats.newCount;
  const learningPercentage = Math.round((learnedCount / totalKanji) * 100);
  const masteryPercentage = Math.round((stats.masteredCount / totalKanji) * 100);

  // Vocabulary stats calculations
  const totalUnlockedVocab = vocabStats.newCount + vocabStats.learningCount + vocabStats.reviewCount + vocabStats.masteredCount;
  const learnedVocabCount = totalUnlockedVocab - vocabStats.newCount;
  const vocabLearningPercentage = totalUnlockedVocab > 0 
    ? Math.round((learnedVocabCount / totalUnlockedVocab) * 100) 
    : 0;
  const vocabMasteryPercentage = totalUnlockedVocab > 0 
    ? Math.round((vocabStats.masteredCount / totalUnlockedVocab) * 100) 
    : 0;

  const totalDueCount = stats.dueCount + vocabStats.dueCount;

  return (
    <div className="dashboard-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1>Konnichiwa! 👋</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Welcome to Kakitai, your Japanese Kanji & Vocabulary study board.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          <Calendar size={16} />
          <span>{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* SRS Due Alerts */}
      {totalDueCount > 0 ? (
        <div className="review-alert-banner">
          <div className="review-alert-content">
            <h3 className="review-alert-title" style={{ color: "var(--color-kunyomi)" }}>
              <AlertCircle size={20} />
              Spaced Repetition Reviews Due
            </h3>
            <p className="review-alert-desc">
              You have {stats.dueCount > 0 && <strong>{stats.dueCount} Kanji</strong>}
              {stats.dueCount > 0 && vocabStats.dueCount > 0 && " and "}
              {vocabStats.dueCount > 0 && <strong>{vocabStats.dueCount} Vocabulary words</strong>} due for review today.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
            {stats.dueCount > 0 && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setView("writing")}
              >
                <Edit3 size={16} />
                <span>Review Kanji</span>
              </button>
            )}
            {vocabStats.dueCount > 0 && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setView("vocab")}
                style={{ background: "var(--color-kunyomi)", boxShadow: "0 4px 12px rgba(32, 201, 151, 0.3)" }}
              >
                <GraduationCap size={16} />
                <span>Review Vocab</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="review-alert-banner" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(32, 201, 151, 0.08) 100%)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
          <div className="review-alert-content">
            <h3 className="review-alert-title" style={{ color: "var(--color-success)" }}>
              <CheckCircle2 size={20} />
              All caught up!
            </h3>
            <p className="review-alert-desc">
              Amazing work! No reviews due right now. You can learn new Kanji in the Bank, review vocabulary, or test your comprehension in the Practice Arena.
            </p>
          </div>
        </div>
      )}

      {/* Stats Summary Bar */}
      <h2 style={{ fontSize: "16px", textTransform: "uppercase", color: "var(--color-text-muted)", letterSpacing: "0.05em", marginBottom: "12px" }}>
        Kanji Progress Details
      </h2>
      <div className="stats-bar" style={{ marginBottom: "32px" }}>
        <div className="glass-card stat-item">
          <div className="stat-icon-wrapper purple">
            <BookOpen size={20} />
          </div>
          <div className="stat-text">
            <span className="stat-val">{stats.newCount}</span>
            <span className="stat-lbl">New Kanji</span>
          </div>
        </div>

        <div className="glass-card stat-item">
          <div className="stat-icon-wrapper yellow">
            <Edit3 size={20} />
          </div>
          <div className="stat-text">
            <span className="stat-val">{stats.learningCount}</span>
            <span className="stat-lbl">In Learning</span>
          </div>
        </div>

        <div className="glass-card stat-item">
          <div className="stat-icon-wrapper blue">
            <Award size={20} />
          </div>
          <div className="stat-text">
            <span className="stat-val">{stats.reviewCount}</span>
            <span className="stat-lbl">In Review</span>
          </div>
        </div>

        <div className="glass-card stat-item">
          <div className="stat-icon-wrapper green">
            <CheckCircle2 size={20} />
          </div>
          <div className="stat-text">
            <span className="stat-val">{stats.masteredCount}</span>
            <span className="stat-lbl">Mastered (Box 5)</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Side - Progress Overview */}
        <div className="glass-card">
          <h2 style={{ marginBottom: "20px" }}>Learning Progress</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Kanji study pool */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                <span style={{ fontWeight: 600 }}>Kanji Study Pool (Started Learning)</span>
                <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>{learnedCount} / {totalKanji} Kanji ({learningPercentage}%)</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fg" style={{ width: `${learningPercentage}%` }} />
              </div>
            </div>

            {/* Vocab study pool */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                <span style={{ fontWeight: 600 }}>Vocabulary Study Pool (Started Learning)</span>
                <span style={{ color: "var(--color-kunyomi)", fontWeight: 700 }}>
                  {learnedVocabCount} / {totalUnlockedVocab} Words ({vocabLearningPercentage}%)
                </span>
              </div>
              <div className="progress-bar-bg" style={{ backgroundColor: "var(--color-bg-surface-hover)" }}>
                <div className="progress-bar-fg" style={{ width: `${vocabLearningPercentage}%`, background: "var(--color-kunyomi)" }} />
              </div>
            </div>

            {/* Kanji Mastery */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                <span style={{ fontWeight: 600 }}>Kanji Mastery Ratio (Box 5)</span>
                <span style={{ color: "var(--color-success)", fontWeight: 700 }}>{stats.masteredCount} / {totalKanji} Kanji ({masteryPercentage}%)</span>
              </div>
              <div className="progress-bar-bg" style={{ backgroundColor: "var(--color-bg-surface-hover)" }}>
                <div className="progress-bar-fg" style={{ width: `${masteryPercentage}%`, background: "var(--color-success)" }} />
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>SRS Mastery Box Breakdown (Kanji)</h3>
          <div className="stats-panel-grid">
            <div className="glass-card box-stat new">
              <span className="box-stat-num">{stats.newCount}</span>
              <span className="box-stat-lbl">Box 0 (New)</span>
            </div>
            <div className="glass-card box-stat learning">
              <span className="box-stat-num">{stats.learningCount}</span>
              <span className="box-stat-lbl">Box 1-2</span>
            </div>
            <div className="glass-card box-stat reviewing">
              <span className="box-stat-num">{stats.reviewCount}</span>
              <span className="box-stat-lbl">Box 3-4</span>
            </div>
            <div className="glass-card box-stat mastered">
              <span className="box-stat-num">{stats.masteredCount}</span>
              <span className="box-stat-lbl">Box 5 (Mastered)</span>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px", borderTop: "1px solid var(--color-border)", paddingTop: "16px" }}>
            <button
              type="button"
              className="icon-btn danger-hover"
              onClick={() => {
                if (window.confirm("Are you sure you want to clear your entire active review queue? All Kanji and Vocabulary progress will be reset back to 'New'.")) {
                  onClearQueue();
                }
              }}
              title="Clear Review Queue"
            >
              <Trash2 size={14} />
              <span>Clear Review Queue</span>
            </button>
          </div>
        </div>

        {/* Right Side - Actions & Help */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3>Study Recommendations</h3>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              Maximize your retention by allocating 15 minutes a day. Here's what you can do right now:
            </p>
            
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setView("bank")}
              style={{ justifyContent: "flex-start", width: "100%" }}
            >
              <BookOpen size={16} />
              <span>Browse Dictionary (Kanji Bank)</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setView("vocab")}
              style={{ justifyContent: "flex-start", width: "100%" }}
            >
              <GraduationCap size={16} />
              <span>Vocab Trainer ({totalUnlockedVocab} unlocked)</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setView("presets")}
              style={{ justifyContent: "flex-start", width: "100%" }}
            >
              <FolderOpen size={16} />
              <span>Study Sets & Presets</span>
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setView("practice")}
              style={{ justifyContent: "flex-start", width: "100%" }}
            >
              <Award size={16} />
              <span>Practice TOEIC Quizzes</span>
            </button>
          </div>

          <div className="glass-card">
            <h3>Vocabulary Unlock System</h3>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "10px", lineHeight: 1.6 }}>
              You don't need to manually add words! When you begin learning a Kanji (Kanji box state &gt; 0), <strong>all of its associated compound vocabulary words are automatically imported</strong> into your active Vocabulary Study Pool. This keeps your vocabulary learning strictly aligned with the Kanji characters you already recognize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
