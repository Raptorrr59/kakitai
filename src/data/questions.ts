import questionsJson from "./questions.json";

export type QuestionType = "cloze" | "reading" | "kanji_select" | "meaning" | "translate_jp_en" | "translate_en_jp";

export interface Question {
  id: string;
  type: QuestionType;
  level: 5 | 4 | 3; // JLPT level (N5, N4, N3)
  subject: string; // The primary Kanji or word this question tests (for practice scoring)
  sentence: string; // The sentence in Japanese (with ruby annotation syntax word{furigana}) or English
  targetWord?: string; // Bolded word if any
  questionText: string; // English question explanation
  options: string[]; // 4 options
  correctAnswer: string; // Correct option
  explanation: string; // Explanation of why it's correct
  englishTranslation: string; // English translation context
}

export const PRACTICE_QUESTIONS = questionsJson as Question[];
