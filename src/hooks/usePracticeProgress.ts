import { useState, useEffect } from "react";

export function usePracticeProgress() {
  const [scores, setScores] = useState<Record<string, number>>({});

  // Load scores from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("practice_arena_scores");
    if (saved) {
      try {
        setScores(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse practice arena scores", e);
      }
    }
  }, []);

  const getScore = (item: string): number => {
    return scores[item] || 0;
  };

  const isLearned = (item: string): boolean => {
    return getScore(item) >= 10;
  };

  // Helper to extract words annotated with furigana in a sentence
  const getWordsInSentence = (sentenceText: string): string[] => {
    const rubyRegex = /([^{}\s]+)\{([^}]+)\}/g;
    const matches: string[] = [];
    let match;
    while ((match = rubyRegex.exec(sentenceText)) !== null) {
      matches.push(match[1]);
    }
    return Array.from(new Set(matches));
  };

  // Helper to extract all individual Kanji characters in a sentence
  const getKanjiInSentence = (sentenceText: string): string[] => {
    // Strip furigana reading text inside curly braces first
    const cleanText = sentenceText.replace(/\{[^}]*\}/g, "");
    const kanjiRegex = /[\u4e00-\u9faf]/g;
    const matches = cleanText.match(kanjiRegex) || [];
    return Array.from(new Set(matches));
  };

  const updateScores = (subject: string, sentence: string, isCorrect: boolean) => {
    const updated = { ...scores };

    const currentSubjectScore = updated[subject] || 0;
    if (isCorrect) {
      // Correct answer: +2 to subject score, capped at 20
      updated[subject] = Math.min(20, currentSubjectScore + 2);
    } else {
      // Incorrect answer: -2 to subject score, floor of 0
      updated[subject] = Math.max(0, currentSubjectScore - 2);

      // Other words in the sentence lose 1 (half of subject penalty)
      const otherWords = getWordsInSentence(sentence).filter((w) => w !== subject);
      otherWords.forEach((word) => {
        const wordScore = updated[word] || 0;
        updated[word] = Math.max(0, wordScore - 1);
      });

      // Other Kanji characters in the sentence lose 1
      const subjectChars = Array.from(subject);
      const otherKanji = getKanjiInSentence(sentence).filter(
        (char) => !subjectChars.includes(char) && !otherWords.some((w) => w.includes(char))
      );
      otherKanji.forEach((char) => {
        const charScore = updated[char] || 0;
        updated[char] = Math.max(0, charScore - 1);
      });
    }

    setScores(updated);
    localStorage.setItem("practice_arena_scores", JSON.stringify(updated));
  };

  const getStats = () => {
    let learnedCount = 0;
    let inProgressCount = 0;

    Object.keys(scores).forEach((key) => {
      const score = scores[key];
      if (score >= 10) {
        learnedCount++;
      } else if (score > 0) {
        inProgressCount++;
      }
    });

    return {
      learnedCount,
      inProgressCount
    };
  };

  const resetProgress = () => {
    setScores({});
    localStorage.removeItem("practice_arena_scores");
  };

  return {
    scores,
    getScore,
    isLearned,
    updateScores,
    getStats,
    resetProgress
  };
}
