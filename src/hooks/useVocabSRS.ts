import { useState, useEffect } from "react";
import { KANJI_DATASET } from "../data/kanji";
import type { VocabularyExample } from "../data/kanji";
import type { SRSProgress } from "./useSRS";

export interface VocabSRSProgress {
  word: string;
  reading: string;
  meaning: string;
  kanjiRef: string; // The kanji that unlocked it
  repetitions: number;
  interval: number; // in days
  easeFactor: number;
  nextReviewDate: string; // ISO string
  box: number; // 0 (New), 1-5 (mastery level)
}

export interface VocabStats {
  newCount: number;
  learningCount: number;
  reviewCount: number;
  masteredCount: number;
  dueCount: number;
}

export function useVocabSRS(kanjiProgress: Record<string, SRSProgress>) {
  const [vocabProgress, setVocabProgress] = useState<Record<string, VocabSRSProgress>>({});

  // Load progress from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("vocab_srs_progress");
    if (saved) {
      try {
        setVocabProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse vocab SRS progress", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: Record<string, VocabSRSProgress>) => {
    setVocabProgress(newProgress);
    localStorage.setItem("vocab_srs_progress", JSON.stringify(newProgress));
  };

  // Extract all unique vocab examples from active (unlocked) Kanji
  const getActiveVocab = (): VocabSRSProgress[] => {
    const activeVocabMap: Record<string, VocabSRSProgress> = {};
    const now = new Date().toISOString();

    // Check each kanji in our dataset
    KANJI_DATASET.forEach((kItem) => {
      const kProg = kanjiProgress[kItem.kanji];
      
      // If Kanji is unlocked (box > 0)
      if (kProg && kProg.box > 0) {
        kItem.examples.forEach((ex) => {
          if (!activeVocabMap[ex.word]) {
            // Check if we have progress saved for this word
            const savedProg = vocabProgress[ex.word];
            
            activeVocabMap[ex.word] = savedProg || {
              word: ex.word,
              reading: ex.reading,
              meaning: ex.meaning,
              kanjiRef: kItem.kanji,
              repetitions: 0,
              interval: 0,
              easeFactor: 2.5,
              nextReviewDate: now, // Due immediately when unlocked
              box: 0 // Box 0 = New
            };
          }
        });
      }
    });

    return Object.values(activeVocabMap);
  };

  // Helper to mark a vocab word as "started learning"
  const startLearningVocab = (word: string) => {
    const activeList = getActiveVocab();
    const item = activeList.find((v) => v.word === word);
    if (!item || item.box !== 0) return;

    const updated = {
      ...vocabProgress,
      [word]: {
        ...item,
        box: 1,
        nextReviewDate: new Date().toISOString() // Due now
      }
    };
    saveProgress(updated);
  };

  // Grade a vocab word using SM-2
  const gradeVocab = (word: string, score: number) => {
    const activeList = getActiveVocab();
    const current = activeList.find((v) => v.word === word);
    if (!current) return;

    let { repetitions, interval, easeFactor, box, reading, meaning, kanjiRef } = current;

    // SM-2 calculation
    easeFactor = easeFactor + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    if (score >= 3) {
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
      box = Math.min(5, Math.floor(repetitions / 2) + 1);
    } else {
      repetitions = 0;
      interval = 1;
      box = Math.max(1, box - 1);
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    const updated: Record<string, VocabSRSProgress> = {
      ...vocabProgress,
      [word]: {
        word,
        reading,
        meaning,
        kanjiRef,
        repetitions,
        interval,
        easeFactor,
        nextReviewDate: nextReview.toISOString(),
        box
      }
    };

    saveProgress(updated);
  };

  // Get Stats for unlocked Vocabulary items
  const getVocabStats = (): VocabStats => {
    let newCount = 0;
    let learningCount = 0;
    let reviewCount = 0;
    let masteredCount = 0;
    let dueCount = 0;

    const now = new Date().getTime();
    const activeVocab = getActiveVocab();

    activeVocab.forEach((item) => {
      if (item.box === 0) {
        newCount++;
      } else if (item.box === 5) {
        masteredCount++;
        if (new Date(item.nextReviewDate).getTime() <= now) {
          dueCount++;
        }
      } else {
        if (item.repetitions <= 2) {
          learningCount++;
        } else {
          reviewCount++;
        }
        
        if (new Date(item.nextReviewDate).getTime() <= now) {
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

  const resetVocabProgress = () => {
    setVocabProgress({});
    localStorage.removeItem("vocab_srs_progress");
  };

  return {
    vocabProgress,
    getActiveVocab,
    startLearningVocab,
    gradeVocab,
    getVocabStats,
    resetVocabProgress
  };
}
