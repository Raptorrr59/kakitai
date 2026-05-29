import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardView } from "./components/DashboardView";
import { KanjiBankView } from "./components/KanjiBankView";
import { PracticeView } from "./components/PracticeView";
import { WritingView } from "./components/WritingView";
import { useSRS } from "./hooks/useSRS";

function App() {
  const [view, setView] = useState<string>("dashboard");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const {
    getKanjiProgress,
    gradeKanji,
    startLearning,
    isDue,
    getStats,
    resetAllProgress
  } = useSRS();

  const stats = getStats();

  // Load and apply user theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("app_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-container">
      <Sidebar
        currentView={view}
        setView={setView}
        dueCount={stats.dueCount}
        theme={theme}
        toggleTheme={toggleTheme}
        onReset={resetAllProgress}
      />
      
      <main className="main-content">
        {view === "dashboard" && (
          <DashboardView stats={stats} setView={setView} />
        )}
        {view === "bank" && (
          <KanjiBankView
            getKanjiProgress={getKanjiProgress}
            gradeKanji={gradeKanji}
            startLearning={startLearning}
          />
        )}
        {view === "practice" && (
          <PracticeView setView={setView} />
        )}
        {view === "writing" && (
          <WritingView
            getKanjiProgress={getKanjiProgress}
            gradeKanji={gradeKanji}
            startLearning={startLearning}
            isDue={isDue}
          />
        )}
      </main>
    </div>
  );
}

export default App;
