import React from "react";
import { BookOpen, Award, CheckCircle2, AlertCircle, Edit3, Calendar } from "lucide-react";
import { SRSStats } from "../hooks/useSRS";

interface DashboardViewProps {
  stats: SRSStats;
  setView: (view: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ stats, setView }) => {
  const totalKanji = 30;
  const learnedCount = totalKanji - stats.newCount;
  const learningPercentage = Math.round((learnedCount / totalKanji) * 100);
  const masteryPercentage = Math.round((stats.masteredCount / totalKanji) * 100);

  return (
    <div className="dashboard-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1>Konnichiwa! 👋</h1>
          <p style={{ color: "var(--color-text-secondary)", marginTop: "4px" }}>
            Welcome to your Japanese Kanji learning dashboard.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          <Calendar size={16} />
          <span>{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* SRS Due Alerts */}
      {stats.dueCount > 0 ? (
        <div className="review-alert-banner">
          <div className="review-alert-content">
            <h3 className="review-alert-title" style={{ color: "var(--color-kunyomi)" }}>
              <AlertCircle size={20} />
              Spaced Repetition Review Due
            </h3>
            <p className="review-alert-desc">
              You have <strong>{stats.dueCount}</strong> Kanji due for review. Tracing these characters today will reinforce them in your long-term memory!
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setView("writing")}
            style={{ flexShrink: 0 }}
          >
            <Edit3 size={16} />
            <span>Start Review Now</span>
          </button>
        </div>
      ) : (
        <div className="review-alert-banner" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(32, 201, 151, 0.08) 100%)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
          <div className="review-alert-content">
            <h3 className="review-alert-title" style={{ color: "var(--color-success)" }}>
              <CheckCircle2 size={20} />
              All caught up!
            </h3>
            <p className="review-alert-desc">
              Amazing work! No reviews due right now. You can learn new Kanji in the Bank or test your comprehension in the Practice Arena.
            </p>
          </div>
        </div>
      )}

      {/* Stats Summary Bar */}
      <div className="stats-bar">
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
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                <span style={{ fontWeight: 600 }}>Active Study Pool (Started Learning)</span>
                <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>{learnedCount} / {totalKanji} Kanji ({learningPercentage}%)</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fg" style={{ width: `${learningPercentage}%` }} />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                <span style={{ fontWeight: 600 }}>Mastery Ratio (Scheduled &gt; 1 month)</span>
                <span style={{ color: "var(--color-success)", fontWeight: 700 }}>{stats.masteredCount} / {totalKanji} Kanji ({masteryPercentage}%)</span>
              </div>
              <div className="progress-bar-bg" style={{ backgroundColor: "var(--color-bg-surface-hover)" }}>
                <div className="progress-bar-fg" style={{ width: `${masteryPercentage}%`, background: "var(--color-success)" }} />
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>SRS Mastery Box Breakdown</h3>
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
              className="btn btn-primary"
              onClick={() => setView("practice")}
              style={{ justifyContent: "flex-start", width: "100%" }}
            >
              <Award size={16} />
              <span>Practice TOEIC Quizzes</span>
            </button>
          </div>

          <div className="glass-card">
            <h3>Spaced Repetition Tip</h3>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "10px", lineHeight: 1.6 }}>
              Learning Japanese requires consistent recall. When you draw Kanji in the <strong>Writing Studio</strong>, grade yourself honestly:
            </p>
            <ul style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginLeft: "20px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong>Blackout (0-1)</strong> resets review intervals back to 1 day.</li>
              <li><strong>Difficult (2-3)</strong> increases intervals slightly, scheduling early.</li>
              <li><strong>Perfect (4-5)</strong> grows interval scales by 2.5x, solidifying your memory.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
