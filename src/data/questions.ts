export type QuestionType = "cloze" | "reading" | "kanji_select" | "meaning" | "translate_jp_en" | "translate_en_jp";

export interface Question {
  id: string;
  type: QuestionType;
  sentence: string; // The sentence in Japanese or English
  targetWord?: string; // Bolded word if any
  questionText: string; // English question explanation
  options: string[]; // 4 options
  correctAnswer: string; // Correct option
  explanation: string; // Explanation of why it's correct
  englishTranslation: string; // English translation context
}

export const PRACTICE_QUESTIONS: Question[] = [
  // === N5 Standard Questions ===
  {
    id: "q1",
    type: "reading",
    sentence: "あの**先生**はとても親切です。",
    targetWord: "先生",
    questionText: "What is the correct reading of the bolded word?",
    options: ["せんせい", "がくせい", "こども", "おとな"],
    correctAnswer: "せんせい",
    explanation: "先生 (せんせい - sensei) means 'teacher'.",
    englishTranslation: "That teacher is very kind."
  },
  {
    id: "q2",
    type: "cloze",
    sentence: "私たちは来週、[ ]に行きます。",
    questionText: "Which word best completes the sentence to mean 'We will go to Japan next week'?",
    options: ["日本", "毎日", "山道", "学校"],
    correctAnswer: "日本",
    explanation: "日本 (にほん - Nihon) means 'Japan'.",
    englishTranslation: "We are going to Japan next week."
  },
  {
    id: "q3",
    type: "kanji_select",
    sentence: "あそこにかわいい**おんなのこ**がいます。",
    targetWord: "おんなのこ",
    questionText: "Choose the correct Kanji representation for the bolded hiragana word.",
    options: ["女の子", "男の子", "大人", "子供"],
    correctAnswer: "女の子",
    explanation: "おんなのこ is written as 女の子, meaning 'girl'.",
    englishTranslation: "There is a cute girl over there."
  },
  
  // === N4 Questions ===
  {
    id: "q4",
    type: "reading",
    sentence: "私たちは**電車**に乗って行きます。",
    targetWord: "電車",
    questionText: "What is the correct reading of the bolded word?",
    options: ["でんしゃ", "じてんしゃ", "じどうしゃ", "えき"],
    correctAnswer: "でんしゃ",
    explanation: "電車 (でんしゃ - densha) means 'train'. 自転車 is bicycle, and 自動車 is automobile.",
    englishTranslation: "We will go by train."
  },
  {
    id: "q5",
    type: "cloze",
    sentence: "彼は昨日、[ ]を読みました。",
    questionText: "Which word best completes the sentence to mean 'He read a newspaper yesterday'?",
    options: ["新聞", "手紙", "辞書", "教科書"],
    correctAnswer: "新聞",
    explanation: "新聞 (しんぶん - shinbun) means 'newspaper'. 辞書 is dictionary, and 教科書 is textbook.",
    englishTranslation: "He read a newspaper yesterday."
  },
  {
    id: "q6",
    type: "kanji_select",
    sentence: "私は明日、**かいしゃ**に行きます。",
    targetWord: "かいしゃ",
    questionText: "Choose the correct Kanji spelling for the bolded word.",
    options: ["会社", "社長", "社会", "会議"],
    correctAnswer: "会社",
    explanation: "会社 (かいしゃ - kaisha) means 'company'. 社会 (しゃかい) means 'society'.",
    englishTranslation: "I am going to the company tomorrow."
  },

  // === N3 Questions ===
  {
    id: "q7",
    type: "reading",
    sentence: "彼は**最近**、とても忙しいです。",
    targetWord: "最近",
    questionText: "What is the correct reading of the bolded word?",
    options: ["さいきん", "さいこう", "もっとも", "とくべつ"],
    correctAnswer: "さいきん",
    explanation: "最近 (さいきん - saikin) means 'recently'. 最高 (さいこう) is 'the best'.",
    englishTranslation: "He has been very busy recently."
  },
  {
    id: "q8",
    type: "cloze",
    sentence: "来週のテストの[ ]を決めました。",
    questionText: "Which word completes the sentence to mean 'We decided the schedule for next week\\'s test'?",
    options: ["予定", "決定", "解決", "理由"],
    correctAnswer: "予定",
    explanation: "予定 (よてい - yotei) means 'plans / schedule'. 決定 (けってい) means 'decision'.",
    englishTranslation: "We decided the schedule for next week's test."
  },
  {
    id: "q9",
    type: "meaning",
    sentence: "私は自分の能力に**自信**があります。",
    targetWord: "自信",
    questionText: "What does the bolded word mean in this sentence?",
    options: ["Self-confidence", "Trust", "Traffic signal", "Emotion"],
    correctAnswer: "Self-confidence",
    explanation: "自信 (じしん - jishin) means 'self-confidence' (literally 'self-trust'). 信用 (しんよう) is trust, and 信号 (しんごう) is traffic signal.",
    englishTranslation: "I have self-confidence in my abilities."
  },

  // === Sentence Translations (JP -> EN) ===
  {
    id: "q10",
    type: "translate_jp_en",
    sentence: "会社の会議はいつも長くて大変です。",
    questionText: "Choose the correct English translation for this Japanese sentence.",
    options: [
      "Company meetings are always long and difficult.",
      "The school meeting was very short and easy.",
      "I am going to meet my company president tomorrow.",
      "Meetings are always held in the company room."
    ],
    correctAnswer: "Company meetings are always long and difficult.",
    explanation: "会社 (company) + 会議 (meeting) + いつも (always) + 長くて (long and...) + 大変です (tough / difficult).",
    englishTranslation: "Company meetings are always long and difficult."
  },
  {
    id: "q11",
    type: "translate_jp_en",
    sentence: "雨が降っていますから、急いで帰りましょう。",
    questionText: "Choose the correct English translation for this Japanese sentence.",
    options: [
      "Since it is raining, let's hurry home.",
      "Let's go home after the rain stops.",
      "It is raining heavily, so we cannot go home.",
      "Because of the rain, the train is delayed."
    ],
    correctAnswer: "Since it is raining, let's hurry home.",
    explanation: "雨 (rain) + 降っていますから (since it is falling) + 急いで (hurrying) + 帰りましょう (let's return home).",
    englishTranslation: "Since it is raining, let's hurry home."
  },
  {
    id: "q12",
    type: "translate_jp_en",
    sentence: "最近は新しい新幹線が走っています。",
    questionText: "Choose the correct English translation for this Japanese sentence.",
    options: [
      "Recently, new bullet trains are running.",
      "The old train is running very fast today.",
      "A new railway track was built recently.",
      "I traveled by bullet train last week."
    ],
    correctAnswer: "Recently, new bullet trains are running.",
    explanation: "最近 (recently) + 新しい (new) + 新幹線 (bullet train) + 走っています (is running).",
    englishTranslation: "Recently, new bullet trains are running."
  },

  // === Sentence Translations (EN -> JP) ===
  {
    id: "q13",
    type: "translate_en_jp",
    sentence: "He is going to return to his country next week.",
    questionText: "Choose the correct Japanese translation for this English sentence.",
    options: [
      "彼は来週、帰国します。",
      "彼は先週、帰国しました。",
      "彼は来月、旅行に行きます。",
      "彼は毎日、英語を勉強します。"
    ],
    correctAnswer: "彼は来週、帰国します。",
    explanation: "He (彼) + next week (来週) + return to country (帰国) + do (します).",
    englishTranslation: "He is going to return to his country next week."
  },
  {
    id: "q14",
    type: "translate_en_jp",
    sentence: "I do not believe that story at all.",
    questionText: "Choose the correct Japanese translation for this English sentence.",
    options: [
      "私はその話を全然信じません。",
      "私はその言葉を信用します。",
      "私は感情を信じます。",
      "私は彼の意見に反対しません。"
    ],
    correctAnswer: "私はその話を全然信じません。",
    explanation: "I (私) + that story (その話) + at all (全然 - used with negative) + do not believe (信じません).",
    englishTranslation: "I do not believe that story at all."
  },
  {
    id: "q15",
    type: "translate_en_jp",
    sentence: "There is a telephone at the station entrance.",
    questionText: "Choose the correct Japanese translation for this English sentence.",
    options: [
      "駅の入り口に電話があります。",
      "学校の出口に電話があります。",
      "駅の窓口で電話をします。",
      "電車の入り口に電話がありません。"
    ],
    correctAnswer: "駅の入り口に電話があります。",
    explanation: "Station (駅) + entrance (入り口) + telephone (電話) + exists (あります).",
    englishTranslation: "There is a telephone at the station entrance."
  }
];
