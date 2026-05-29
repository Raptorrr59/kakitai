export type QuestionType = "cloze" | "reading" | "kanji_select" | "meaning";

export interface Question {
  id: string;
  type: QuestionType;
  sentence: string; // The sentence in Japanese (with kanji or kanji bolded)
  targetWord?: string; // The bolded word, if any
  questionText: string; // The question explanation in English
  options: string[]; // 4 multiple-choice options
  correctAnswer: string; // Must match one of the options
  explanation: string; // Explanation of why it is correct and word translation
  englishTranslation: string; // Translation of the whole sentence
}

export const PRACTICE_QUESTIONS: Question[] = [
  {
    id: "q1",
    type: "reading",
    sentence: "あの**先生**はとても親切です。",
    targetWord: "先生",
    questionText: "What is the correct reading of the bolded word?",
    options: ["せんせい", "がくせい", "こども", "おとな"],
    correctAnswer: "せんせい",
    explanation: "先生 (せんせい - sensei) means 'teacher'. 学生 (がくせい) is student, 子供 (こども) is child, and 大人 (おとな) is adult.",
    englishTranslation: "That teacher is very kind."
  },
  {
    id: "q2",
    type: "cloze",
    sentence: "私たちは来週、[ ]に行きます。",
    questionText: "Which word best completes the sentence to mean: 'We will go to Japan next week.'?",
    options: ["日本", "毎日", "山道", "学校"],
    correctAnswer: "日本",
    explanation: "日本 (にほん - Nihon) means 'Japan'. The sentence translates to 'We are going to Japan next week'.",
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
    explanation: "おんなのこ is written as 女の子 (woman + child), meaning 'girl'. 男の子 is boy, and 子供 is children.",
    englishTranslation: "There is a cute girl over there."
  },
  {
    id: "q4",
    type: "meaning",
    sentence: "テーブルの上に**本**があります。",
    targetWord: "本",
    questionText: "What is the meaning of the bolded Kanji in this context?",
    options: ["Book", "Water", "Money", "Tree"],
    correctAnswer: "Book",
    explanation: "本 (ほん - hon) means 'book'.",
    englishTranslation: "There is a book on the table."
  },
  {
    id: "q5",
    type: "reading",
    sentence: "今日は**火曜日**です。",
    targetWord: "火曜日",
    questionText: "What is the correct reading of the bolded word?",
    options: ["かようび", "げつようび", "すいようび", "もくようび"],
    correctAnswer: "かようび",
    explanation: "火曜日 (かようび - kayoubi) is Tuesday, named after 火 (fire). げつようび is Monday, すいようび is Wednesday, and もくようび is Thursday.",
    englishTranslation: "Today is Tuesday."
  },
  {
    id: "q6",
    type: "cloze",
    sentence: "冷たい[ ]を飲みます。",
    questionText: "Which word best completes the sentence to mean: 'I drink cold water.'?",
    options: ["水", "お金", "お茶", "ビール"],
    correctAnswer: "水",
    explanation: "水 (みず - mizu) means 'water'. The sentence reads: '冷たい水を飲みます' (I drink cold water).",
    englishTranslation: "I drink cold water."
  },
  {
    id: "q7",
    type: "reading",
    sentence: "このアパートの**入り口**はどこですか。",
    targetWord: "入り口",
    questionText: "What is the correct reading of the bolded word?",
    options: ["いりぐち", "でぐち", "まどぐち", "じんこう"],
    correctAnswer: "いりぐち",
    explanation: "入り口 (いりぐち - iriguchi) means 'entrance'. 出口 (でぐち) is exit, and 窓口 (まどぐち) is service window.",
    englishTranslation: "Where is the entrance to this apartment?"
  },
  {
    id: "q8",
    type: "kanji_select",
    sentence: "山田さんは**まいにち**日本語を勉強します。",
    targetWord: "まいにち",
    questionText: "Choose the correct Kanji representation for the bolded word.",
    options: ["毎日", "今日", "来週", "今月"],
    correctAnswer: "毎日",
    explanation: "まいにち is written as 毎日 (every + day), meaning 'every day'. 今日 is today, and 来週 is next week.",
    englishTranslation: "Mr. Yamada studies Japanese every day."
  },
  {
    id: "q9",
    type: "cloze",
    sentence: "彼は[ ]で英語を教えています。",
    questionText: "Which word best completes the sentence to mean: 'He teaches English at a school.'?",
    options: ["学校", "山", "旅行", "川"],
    correctAnswer: "学校",
    explanation: "学校 (がっこう - gakkou) means 'school'. The sentence reads: '彼は学校で英語を教えています' (He teaches English at a school).",
    englishTranslation: "He teaches English at a school."
  },
  {
    id: "q10",
    type: "meaning",
    sentence: "財布の中に**お金**がありません。",
    targetWord: "お金",
    questionText: "What is the meaning of the bolded word?",
    options: ["Money", "Gold medal", "Hardware", "Soil"],
    correctAnswer: "Money",
    explanation: "お金 (おかね - okane) means 'money'.",
    englishTranslation: "There is no money in my wallet."
  },
  {
    id: "q11",
    type: "reading",
    sentence: "富士山は日本で一番高い**山**です。",
    targetWord: "山",
    questionText: "What is the reading of the bolded character in this standalone position?",
    options: ["やま", "さん", "かわ", "うみ"],
    correctAnswer: "やま",
    explanation: "When standing alone, 山 is read as its Kunyomi 'やま' (yama), meaning 'mountain'. In compounds like 富士山, it uses Onyomi 'さん' (san).",
    englishTranslation: "Mount Fuji is the tallest mountain in Japan."
  },
  {
    id: "q12",
    type: "cloze",
    sentence: "私は朝ごはんを[ ]ます。",
    questionText: "Which word completes the verb to make: 'I eat breakfast.'?",
    options: ["食べ", "飲み", "行き", "見"],
    correctAnswer: "食べ",
    explanation: "食べ (たべ - tabe) is the stem of 食べる (to eat). 食べます means 'to eat (polite)'.",
    englishTranslation: "I eat breakfast."
  },
  {
    id: "q13",
    type: "kanji_select",
    sentence: "あそこを走っている**おとこのこ**は誰ですか。",
    targetWord: "おとこのこ",
    questionText: "Choose the correct Kanji representation for the bolded word.",
    options: ["男の子", "女の子", "大人", "男性"],
    correctAnswer: "男の子",
    explanation: "おとこのこ is written as 男の子 (man + child), meaning 'boy'.",
    englishTranslation: "Who is the boy running over there?"
  },
  {
    id: "q14",
    type: "reading",
    sentence: "昨日は友達とおいしい**食事**をしました。",
    targetWord: "食事",
    questionText: "What is the correct reading of the bolded word?",
    options: ["しょくじ", "たべもの", "のみもの", "ちょうしょく"],
    correctAnswer: "しょくじ",
    explanation: "食事 (しょくじ - shokuji) means 'meal'. 食べ物 (たべもの) is food, 飲み物 (のみもの) is drink, and 朝食 (ちょうしょく) is breakfast.",
    englishTranslation: "Yesterday, I had a delicious meal with a friend."
  },
  {
    id: "q15",
    type: "cloze",
    sentence: "来週の[ ]に旅行に行きます。",
    questionText: "Which word best completes the sentence to mean: 'I am going on a trip next Saturday.'?",
    options: ["土曜日", "日曜日", "月曜日", "金曜日"],
    correctAnswer: "土曜日",
    explanation: "土曜日 (どようび - doyoubi) means 'Saturday'. The sentence reads: '来週の土曜日に旅行に行きます'.",
    englishTranslation: "I am going on a trip next Saturday."
  }
];
