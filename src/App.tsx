import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardView } from "./components/DashboardView";
import { KanjiBankView } from "./components/KanjiBankView";
import { PracticeView } from "./components/PracticeView";
import { WritingView } from "./components/WritingView";
import { VocabView } from "./components/VocabView";
import { useSRS } from "./hooks/useSRS";
import { useVocabSRS } from "./hooks/useVocabSRS";

function App() {
  const [view, setView] = useState<string>("dashboard");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  const {
    progress: kanjiProgress,
    getKanjiProgress,
    gradeKanji,
    startLearning,
    isDue: isKanjiDue,
    getStats: getKanjiStats,
    resetAllProgress: resetKanjiProgress
  } = useSRS();

  const {
    getActiveVocab,
    startLearningVocab,
    gradeVocab,
    getVocabStats,
    resetVocabProgress
  } = useVocabSRS(kanjiProgress);

  const stats = getKanjiStats();
  const vocabStats = getVocabStats();

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

  const handleResetAll = () => {
    resetKanjiProgress();
    resetVocabProgress();
  };

  return (
    <div className="app-container">
      <Sidebar
        currentView={view}
        setView={setView}
        dueCount={stats.dueCount}
        vocabDueCount={vocabStats.dueCount}
        theme={theme}
        toggleTheme={toggleTheme}
        onReset={handleResetAll}
      />
      
      <main className="main-content">
        {view === "dashboard" && (
          <DashboardView 
            stats={stats} 
            vocabStats={vocabStats} 
            setView={setView} 
          />
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
            isDue={isKanjiDue}
          />
        )}
        {view === "vocab" && (
          <VocabView
            activeVocabList={getActiveVocab()}
            gradeVocab={gradeVocab}
            startLearningVocab={startLearningVocab}
            vocabStats={vocabStats}
          />
        )}
      </main>
    </div>
  );
}

export default App;
