import { useState, useEffect } from "react";
import { KanjiItem, KANJI_DATASET } from "../data/kanji";

export interface SRSProgress {
  kanji: string;
  repetitions: number;
  interval: number; // in days
  easeFactor: number;
  nextReviewDate: string; // ISO string
  box: number; // 0 (New), 1-5 (mastery level)
}

export interface SRSStats {
  newCount: number;
  learningCount: number;
  reviewCount: number;
  masteredCount: number;
  dueCount: number;
}

export function useSRS() {
  const [progress, setProgress] = useState<Record<string, SRSProgress>>({});

  // Load progress from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("kanji_srs_progress");
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse SRS progress", e);
      }
    } else {
      // Initialize empty progress for all kanji
      const initial: Record<string, SRSProgress> = {};
      setProgress(initial);
    }
  }, []);

  // Save to LocalStorage whenever progress changes
  const saveProgress = (newProgress: Record<string, SRSProgress>) => {
    setProgress(newProgress);
    localStorage.setItem("kanji_srs_progress", JSON.stringify(newProgress));
  };

  // Get progress for a specific Kanji, or return a default "new" state
  const getKanjiProgress = (kanji: string): SRSProgress => {
    if (progress[kanji]) return progress[kanji];
    return {
      kanji,
      repetitions: 0,
      interval: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date(0).toISOString(), // Way in the past, so it's immediately due if started
      box: 0 // Box 0 = New
    };
  };

  // Grade an item using SM-2
  // score: 0 to 5
  // 5 = perfect response
  // 4 = correct with hesitation
  // 3 = correct with difficulty
  // 2 = incorrect but easily recalled
  // 1 = incorrect, remembered with effort
  // 0 = complete blackout
  const gradeKanji = (kanji: string, score: number) => {
    const current = getKanjiProgress(kanji);
    let { repetitions, interval, easeFactor, box } = current;

    // Calculate new Ease Factor (EF)
    easeFactor = easeFactor + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    if (score >= 3) {
      // Correct response
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
      
      // Update mastery box
      box = Math.min(5, Math.floor(repetitions / 2) + 1);
    } else {
      // Incorrect response - reset repetitions
      repetitions = 0;
      interval = 1;
      box = Math.max(1, box - 1); // Downgrade level
    }

    // Set next review date
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);
    // For testing/quick-study purposes, we set the hours to start of day or exact time
    const nextReviewDate = nextReview.toISOString();

    const updated: Record<string, SRSProgress> = {
      ...progress,
      [kanji]: {
        kanji,
        repetitions,
        interval,
        easeFactor,
        nextReviewDate,
        box
      }
    };

    saveProgress(updated);
  };

  // Helper to mark a kanji as "learning" (initiating review)
  const startLearning = (kanji: string) => {
    const current = getKanjiProgress(kanji);
    if (current.box !== 0) return; // already learning

    const updated = {
      ...progress,
      [kanji]: {
        ...current,
        box: 1,
        nextReviewDate: new Date().toISOString() // Due now
      }
    };
    saveProgress(updated);
  };

  // Check if a Kanji is due for review
  const isDue = (kanji: string): boolean => {
    const p = progress[kanji];
    if (!p) return false; // if never started learning, it is not "due for review" in the active queue (it's New)
    if (p.box === 0) return false;
    return new Date(p.nextReviewDate).getTime() <= new Date().getTime();
  };

  // Get lists of Kanji based on their SRS state
  const getStats = (): SRSStats => {
    let newCount = 0;
    let learningCount = 0;
    let reviewCount = 0;
    let masteredCount = 0;
    let dueCount = 0;

    const now = new Date().getTime();

    KANJI_DATASET.forEach((item) => {
      const p = progress[item.kanji];
      if (!p || p.box === 0) {
        newCount++;
      } else if (p.box === 5) {
        masteredCount++;
        if (new Date(p.nextReviewDate).getTime() <= now) {
          dueCount++;
        }
      } else {
        // boxes 1-4
        if (p.repetitions <= 2) {
          learningCount++;
        } else {
          reviewCount++;
        }
        
        if (new Date(p.nextReviewDate).getTime() <= now) {
          dueCount++;
        }
      }
    });

    return {
      newCount,
      learningCount,
      reviewCount,
      masteredCount,
      dueCount
    };
  };

  const resetAllProgress = () => {
    saveProgress({});
  };

  return {
    progress,
    getKanjiProgress,
    gradeKanji,
    startLearning,
    isDue,
    getStats,
    resetAllProgress
  };
}
