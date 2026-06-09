import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { DashboardView } from "./components/DashboardView";
import { KanjiBankView } from "./components/KanjiBankView";
import { PracticeView } from "./components/PracticeView";
import { JLPTView } from "./components/JLPTView";
import { WritingView } from "./components/WritingView";
import { TypingView } from "./components/TypingView";
import { VocabView } from "./components/VocabView";
import { useSRS } from "./hooks/useSRS";
import { useVocabSRS } from "./hooks/useVocabSRS";
import { usePresets } from "./hooks/usePresets";
import { PresetsView } from "./components/PresetsView";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Active view is derived from the URL (e.g. "/bank" -> "bank"); navigating routes the app.
  const view = location.pathname.split("/")[1] || "dashboard";
  const setView = (next: string) => navigate(`/${next}`);

  const [theme, setTheme] = useState<"dark" | "hokusai">("dark");
  
  const {
    progress: kanjiProgress,
    getKanjiProgress,
    gradeKanji,
    startLearning,
    startLearningMultiple,
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

  const {
    presets,
    createPreset,
    deletePreset,
    activatePreset
  } = usePresets();

  const stats = getKanjiStats();
  const vocabStats = getVocabStats();

  // Load and apply user theme (legacy "light" maps to the Hokusai light mode)
  useEffect(() => {
    const savedTheme = localStorage.getItem("app_theme");
    if (savedTheme === "hokusai" || savedTheme === "light") {
      setTheme("hokusai");
    } else if (savedTheme === "dark") {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "hokusai" : "dark"));
  };

  const handleResetAll = () => {
    resetKanjiProgress();
    resetVocabProgress();
    localStorage.removeItem("practice_arena_scores");
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
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={
              <DashboardView
                stats={stats}
                vocabStats={vocabStats}
                setView={setView}
                onClearQueue={handleResetAll}
              />
            }
          />
          <Route
            path="/bank"
            element={
              <KanjiBankView
                getKanjiProgress={getKanjiProgress}
                gradeKanji={gradeKanji}
                startLearning={startLearning}
              />
            }
          />
          <Route path="/practice" element={<PracticeView setView={setView} />} />
          <Route path="/jlpt" element={<JLPTView setView={setView} />} />
          <Route
            path="/writing"
            element={
              <WritingView
                getKanjiProgress={getKanjiProgress}
                gradeKanji={gradeKanji}
                startLearning={startLearning}
                isDue={isKanjiDue}
              />
            }
          />
          <Route
            path="/typing"
            element={
              <TypingView
                getKanjiProgress={getKanjiProgress}
                gradeKanji={gradeKanji}
                isDue={isKanjiDue}
                presets={presets}
                setView={setView}
              />
            }
          />
          <Route
            path="/vocab"
            element={
              <VocabView
                activeVocabList={getActiveVocab()}
                gradeVocab={gradeVocab}
                startLearningVocab={startLearningVocab}
              />
            }
          />
          <Route
            path="/presets"
            element={
              <PresetsView
                presets={presets}
                createPreset={createPreset}
                deletePreset={deletePreset}
                activatePreset={activatePreset}
                startLearningMultiple={startLearningMultiple}
                getKanjiProgress={getKanjiProgress}
              />
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
