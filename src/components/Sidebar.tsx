import React from "react";
import { BookOpen, LayoutDashboard, Award, Edit3, Sun, RefreshCw, GraduationCap, FolderOpen, Keyboard, Waves, ClipboardCheck } from "lucide-react";

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
  dueCount: number;
  vocabDueCount: number;
  theme: "dark" | "hokusai";
  toggleTheme: () => void;
  onReset: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  setView,
  dueCount,
  vocabDueCount,
  theme,
  toggleTheme,
  onReset
}) => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">書</div>
        <div className="logo-text">
          <span className="logo-title">Kakitai</span>
          <span className="logo-subtitle">書きたい</span>
        </div>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "dashboard" ? "active" : ""}`}
            onClick={() => setView("dashboard")}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "bank" ? "active" : ""}`}
            onClick={() => setView("bank")}
          >
            <BookOpen size={18} />
            <span>Kanji Bank</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "practice" ? "active" : ""}`}
            onClick={() => setView("practice")}
          >
            <Award size={18} />
            <span>Practice Arena</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "jlpt" ? "active" : ""}`}
            onClick={() => setView("jlpt")}
          >
            <ClipboardCheck size={18} />
            <span>JLPT Trainer</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "writing" ? "active" : ""}`}
            onClick={() => setView("writing")}
          >
            <Edit3 size={18} />
            <span>Writing Studio</span>
            {dueCount > 0 && (
              <span 
                className="tag tag-kunyomi" 
                style={{ marginLeft: "auto", fontSize: "10px", padding: "2px 6px" }}
              >
                {dueCount} Due
              </span>
            )}
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "typing" ? "active" : ""}`}
            onClick={() => setView("typing")}
          >
            <Keyboard size={18} />
            <span>Keyboard Trainer</span>
            {dueCount > 0 && (
              <span 
                className="tag tag-kunyomi" 
                style={{ marginLeft: "auto", fontSize: "10px", padding: "2px 6px" }}
              >
                {dueCount} Due
              </span>
            )}
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "vocab" ? "active" : ""}`}
            onClick={() => setView("vocab")}
          >
            <GraduationCap size={18} />
            <span>Vocab Trainer</span>
            {vocabDueCount > 0 && (
              <span 
                className="tag tag-onyomi" 
                style={{ marginLeft: "auto", fontSize: "10px", padding: "2px 6px" }}
              >
                {vocabDueCount} Due
              </span>
            )}
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-button ${currentView === "presets" ? "active" : ""}`}
            onClick={() => setView("presets")}
          >
            <FolderOpen size={18} />
            <span>Study Sets</span>
          </button>
        </li>
      </ul>

      <div className="sidebar-footer">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Waves size={15} /> : <Sun size={15} />}
          <span>{theme === "dark" ? "Hokusai Wave" : "Dark Mode"}</span>
        </button>

        <button
          type="button"
          className="icon-btn danger-hover"
          onClick={() => {
            if (window.confirm("Are you sure you want to reset all SRS learning progress? This cannot be undone.")) {
              onReset();
            }
          }}
          title="Reset Study Data"
          style={{ width: "100%", justifyContent: "center", padding: "8px" }}
        >
          <RefreshCw size={14} />
          <span>Reset Study Data</span>
        </button>
      </div>
    </aside>
  );
};
