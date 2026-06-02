import { KANJI_DATASET } from "./kanji";

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

const MANUAL_QUESTIONS: Question[] = [
  // === N5 Standard Questions ===
  {
    id: "q1",
    type: "reading",
    level: 5,
    subject: "先生",
    sentence: "あの**先生{せんせい}**はとても親切{しんせつ}です。",
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
    level: 5,
    subject: "日本",
    sentence: "私{わたし}たちは来週{らいしゅう}、[ ]に行{い}きます。",
    questionText: "Which word best completes the sentence to mean 'We will go to Japan next week'?",
    options: ["日本", "毎日", "山道", "学校"],
    correctAnswer: "日本",
    explanation: "日本 (にほん - Nihon) means 'Japan'.",
    englishTranslation: "We are going to Japan next week."
  },
  {
    id: "q3",
    type: "kanji_select",
    level: 5,
    subject: "女の子",
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
    level: 4,
    subject: "電車",
    sentence: "私{わたし}たちは**電車{でんしゃ}**に乗{の}って行{い}きます。",
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
    level: 4,
    subject: "新聞",
    sentence: "彼{かれ}は昨日{きのう}、[ ]を読{よ}みました。",
    questionText: "Which word best completes the sentence to mean 'He read a newspaper yesterday'?",
    options: ["新聞", "手紙", "辞書", "教科書"],
    correctAnswer: "新聞",
    explanation: "新聞 (しんぶん - shinbun) means 'newspaper'. 辞書 is dictionary, and 教科書 is textbook.",
    englishTranslation: "He read a newspaper yesterday."
  },
  {
    id: "q6",
    type: "kanji_select",
    level: 4,
    subject: "会社",
    sentence: "私{わたし}は明日{あした}、**かいしゃ**に行{い}きます。",
    targetWord: "かいしゃ",
    questionText: "Choose the correct Kanji spelling for the bolded word.",
    options: ["会社", "社長", "社会", "会議"],
    correctAnswer: "会社",
    explanation: "会社 (かいしゃ - kaisha) means 'company'.",
    englishTranslation: "I am going to the company tomorrow."
  },

  // === N3 Questions ===
  {
    id: "q7",
    type: "reading",
    level: 3,
    subject: "最近",
    sentence: "彼{かれ}は**最近{さいきん}**、とても忙{いそが}しいです。",
    targetWord: "最近",
    questionText: "What is the correct reading of the bolded word?",
    options: ["さいきん", "さいこう", "もっとも", "とくべつ"],
    correctAnswer: "さいきん",
    explanation: "最近 (さいきん - saikin) means 'recently'.最高 (さいこう) is 'the best'.",
    englishTranslation: "He has been very busy recently."
  },
  {
    id: "q8",
    type: "cloze",
    level: 3,
    subject: "予定",
    sentence: "来週{らいしゅう}のテスト of [ ]を決{き}めました。",
    questionText: "Which word completes the sentence to mean 'We decided the schedule for next week\\'s test'?",
    options: ["予定", "決定", "解決", "理由"],
    correctAnswer: "予定",
    explanation: "予定 (よてい - yotei) means 'plans / schedule'. 決定 (けってい) means 'decision'.",
    englishTranslation: "We decided the schedule for next week's test."
  },
  {
    id: "q9",
    type: "meaning",
    level: 3,
    subject: "自信",
    sentence: "私{わたし}は自分{じぶん}の能力{のうりょく}に**自信{じしん}**があります。",
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
    level: 4,
    subject: "会議",
    sentence: "会社{かいしゃ}の会議{かいぎ}はいつも長{なが}くて大変{たいへん}です。",
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
    level: 3,
    subject: "雨",
    sentence: "雨{あめ}が降{ふ}っていますから、急{いそ}いで帰り{かえり}ましょう。",
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
    level: 3,
    subject: "新幹線",
    sentence: "最近{さいきん}は新{あたら}しい新幹線{しんかんせん}が走{はし}っています。",
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
    level: 4,
    subject: "帰国",
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
    level: 3,
    subject: "信じる",
    sentence: "I do not believe that story at all.",
    questionText: "Choose the correct Japanese translation for this English sentence.",
    options: [
      "私はその話を全然信じません。",
      "私はその言葉を信用します。",
      "私は感情を信じます。",
      "私は彼の意見に反対しません."
    ],
    correctAnswer: "私はその話を全然信じません。",
    explanation: "I (私) + that story (その話) + at all (全然) + do not believe (信じません).",
    englishTranslation: "I do not believe that story at all."
  },
  {
    id: "q15",
    type: "translate_en_jp",
    level: 4,
    subject: "入り口",
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
  },

  // === Additional N5 Questions ===
  {
    id: "q16",
    type: "reading",
    level: 5,
    subject: "天気",
    sentence: "今日{きょう}はとてもいい**天気{てんき}**ですね。",
    targetWord: "天気",
    questionText: "What is the correct reading of the bolded word?",
    options: ["てんき", "でんき", "あめ", "ゆき"],
    correctAnswer: "てんき",
    explanation: "天気 (てんき - tenki) means 'weather'. 電気 is electricity.",
    englishTranslation: "Today is very good weather, isn't it?"
  },
  {
    id: "q17",
    type: "cloze",
    level: 5,
    subject: "水",
    sentence: "毎朝{まいあさ}、[ ]を飲{の}みます。",
    questionText: "Which word best completes the sentence to mean 'I drink water every morning'?",
    options: ["水", "山", "木", "火"],
    correctAnswer: "水",
    explanation: "水 (みず - mizu) means 'water'.",
    englishTranslation: "I drink water every morning."
  },
  {
    id: "q18",
    type: "kanji_select",
    level: 5,
    subject: "友達",
    sentence: "私の**ともだち**はとても親切{しんせつ}です。",
    targetWord: "ともだち",
    questionText: "Choose the correct Kanji representation for the bolded hiragana word.",
    options: ["友達", "先生", "学生", "子供"],
    correctAnswer: "友達",
    explanation: "ともだち is written as 友達, meaning 'friend'.",
    englishTranslation: "My friend is very kind."
  },
  {
    id: "q19",
    type: "reading",
    level: 5,
    subject: "学生",
    sentence: "あの**学生{がくせい}**は日本語{にほんご}が上手{じょうず}です。",
    targetWord: "学生",
    questionText: "What is the correct reading of the bolded word?",
    options: ["がくせい", "せんせい", "こうこう", "ともだち"],
    correctAnswer: "がくせい",
    explanation: "学生 (がくせい - gakusei) means 'student'.",
    englishTranslation: "That student is good at Japanese."
  },
  {
    id: "q20",
    type: "cloze",
    level: 5,
    subject: "本",
    sentence: "図書館{としょかん}で[ ]を借{か}りました。",
    questionText: "Which word completes the sentence to mean 'I borrowed a book at the library'?",
    options: ["本", "車", "水", "犬"],
    correctAnswer: "本",
    explanation: "本 (ほん - hon) means 'book'.",
    englishTranslation: "I borrowed a book at the library."
  },
  {
    id: "q21",
    type: "kanji_select",
    level: 5,
    subject: "車",
    sentence: "駅の前{まえ}に**くるま**があります。",
    targetWord: "くるま",
    questionText: "Choose the correct Kanji spelling for the bolded word.",
    options: ["車", "電車", "自転車", "電話"],
    correctAnswer: "車",
    explanation: "くるま is written as 車, meaning 'car/vehicle'.",
    englishTranslation: "There is a car in front of the station."
  },
  {
    id: "q22",
    type: "reading",
    level: 5,
    subject: "九日",
    sentence: "昨日{きのう}は**九日{ここのか}**でした。",
    targetWord: "九日",
    questionText: "What is the correct reading of the bolded word?",
    options: ["ここのか", "ようか", "ついたち", "とおか"],
    correctAnswer: "ここのか",
    explanation: "九日 (ここのか - kokonoka) means '9th day of the month'.",
    englishTranslation: "Yesterday was the ninth."
  },
  {
    id: "q23",
    type: "cloze",
    level: 5,
    subject: "山",
    sentence: "夏{なつ}休{やす}みに[ ]へ登{のぼ}りました。",
    questionText: "Which word completes the sentence to mean 'I climbed a mountain during summer vacation'?",
    options: ["山", "川", "海", "池"],
    correctAnswer: "山",
    explanation: "山 (やま - yama) means 'mountain'.",
    englishTranslation: "I climbed a mountain during summer vacation."
  },

  // === Additional N4 Questions ===
  {
    id: "q24",
    type: "reading",
    level: 4,
    subject: "試験",
    sentence: "来週{らいしゅう}は**試験{しけん}**があります。",
    targetWord: "試験",
    questionText: "What is the correct reading of the bolded word?",
    options: ["しけん", "じゅんび", "けいけん", "じっけん"],
    correctAnswer: "しけん",
    explanation: "試験 (しけん - shiken) means 'examination / test'.",
    englishTranslation: "There is an exam next week."
  },
  {
    id: "q25",
    type: "cloze",
    level: 4,
    subject: "自転車",
    sentence: "健康{けんこう}のために毎日[ ]にのっています。",
    questionText: "Which word completes the sentence to mean 'I ride a bicycle every day for my health'?",
    options: ["自転車", "新幹線", "飛行機", "自動車"],
    correctAnswer: "自転車",
    explanation: "自転車 (じてんしゃ - jitensha) means 'bicycle'.",
    englishTranslation: "I ride a bicycle every day for my health."
  },
  {
    id: "q26",
    type: "kanji_select",
    level: 4,
    subject: "医者",
    sentence: "病気{びょうき}になったので**いしゃ**に行きました。",
    targetWord: "いしゃ",
    questionText: "Choose the correct Kanji spelling for the bolded word.",
    options: ["医者", "先生", "看護師", "患者"],
    correctAnswer: "医者",
    explanation: "いしゃ is written as 医者, meaning 'medical doctor'.",
    englishTranslation: "Since I got sick, I went to the doctor."
  },
  {
    id: "q27",
    type: "reading",
    level: 4,
    subject: "空港",
    sentence: "あの**空港{くうこう}**はとても新{あたら}しいです。",
    targetWord: "空港",
    questionText: "What is the correct reading of the bolded word?",
    options: ["くうこう", "みなと", "えき", "びょういん"],
    correctAnswer: "くうこう",
    explanation: "空港 (くうこう - kuukou) means 'airport'.",
    englishTranslation: "That airport is very new."
  },
  {
    id: "q28",
    type: "cloze",
    level: 4,
    subject: "台所",
    sentence: "日曜日に[ ]で日本料理{にほんりょうり}を作{つく}りました。",
    questionText: "Which word completes the sentence to mean 'I cooked Japanese food in the kitchen on Sunday'?",
    options: ["台所", "図書室", "会議室", "研究室"],
    correctAnswer: "台所",
    explanation: "台所 (だいどころ - daidokoro) means 'kitchen'.",
    englishTranslation: "I cooked Japanese food in the kitchen on Sunday."
  },
  {
    id: "q29",
    type: "meaning",
    level: 4,
    subject: "働く",
    sentence: "私たちはここで十年間**働く{はたらく}**つもりです。",
    targetWord: "働く",
    questionText: "What does the bolded word mean in this sentence?",
    options: ["To work", "To study", "To play", "To live"],
    correctAnswer: "To work",
    explanation: "働く (はたらく - hataraku) means 'to work'.",
    englishTranslation: "We intend to work here for ten years."
  },
  {
    id: "q30",
    type: "reading",
    level: 4,
    subject: "手紙",
    sentence: "彼女{かのじょ}から**手紙{てがみ}**が届{とど}きました。",
    targetWord: "手紙",
    questionText: "What is the correct reading of the bolded word?",
    options: ["てがみ", "はがき", "しんぶん", "でんわ"],
    correctAnswer: "てがみ",
    explanation: "手紙 (てがみ - tegami) means 'letter'.",
    englishTranslation: "A letter arrived from her."
  },
  {
    id: "q31",
    type: "cloze",
    level: 4,
    subject: "料理",
    sentence: "母はすばらしい[ ]を作{つく}ってくれました。",
    questionText: "Which word completes the sentence to mean 'My mother made a wonderful meal (cuisine) for me'?",
    options: ["料理", "洗たく", "掃除", "買物"],
    correctAnswer: "料理",
    explanation: "料理 (りょうり - ryouri) means 'cuisine / cooking'.",
    englishTranslation: "My mother made a wonderful meal for me."
  },

  // === Additional N3 Questions ===
  {
    id: "q32",
    type: "reading",
    level: 3,
    subject: "準備",
    sentence: "旅行{りょこう}の**準備{じゅんび}**をしましょう。",
    targetWord: "準備",
    questionText: "What is the correct reading of the bolded word?",
    options: ["じゅんび", "しょうかい", "れんらく", "ほうこく"],
    correctAnswer: "じゅんび",
    explanation: "準備 (じゅんび - junbi) means 'preparation'.",
    englishTranslation: "Let's prepare for the trip."
  },
  {
    id: "q33",
    type: "cloze",
    level: 3,
    subject: "紹介",
    sentence: "新{あたら}しい先生を学生に[ ]しました。",
    questionText: "Which word completes the sentence to mean 'I introduced the new teacher to the students'?",
    options: ["紹介", "解決", "信用", "招待"],
    correctAnswer: "紹介",
    explanation: "紹介 (しょうかい - shoukai) means 'introduction'.",
    englishTranslation: "I introduced the new teacher to the students."
  },
  {
    id: "q34",
    type: "meaning",
    level: 3,
    subject: "必要",
    sentence: "パスポートを申請{しんせい}するには写真{しゃしん}が**必要{ひつよう}**です。",
    questionText: "What does the bolded word mean in this sentence?",
    options: ["Necessary", "Dangerous", "Convenient", "Useless"],
    correctAnswer: "Necessary",
    explanation: "必要 (ひつよう - hitsuyou) means 'necessary / essential'.",
    englishTranslation: "Photos are necessary to apply for a passport."
  },
  {
    id: "q35",
    type: "reading",
    level: 3,
    subject: "環境",
    sentence: "地球{ちきゅう}の**環境{かんきょう}**を守{まも}ることは大切{たいせつ}です。",
    questionText: "What is the correct reading of the bolded word?",
    options: ["かんきょう", "かんけい", "かんこう", "かんじょう"],
    correctAnswer: "かんきょう",
    explanation: "環境 (かんきょう - kankyou) means 'environment'.",
    englishTranslation: "Protecting the Earth's environment is important."
  },
  {
    id: "q36",
    type: "kanji_select",
    level: 3,
    subject: "経験",
    sentence: "仕事{しごと}には**けいけん**が必要{ひつよう}です。",
    questionText: "Choose the correct Kanji spelling for the bolded word.",
    options: ["経験", "計画", "実験", "決定"],
    correctAnswer: "経験",
    explanation: "けいけん is written as 経験, meaning 'experience'.",
    englishTranslation: "Experience is necessary for the job."
  },
  {
    id: "q37",
    type: "reading",
    level: 3,
    subject: "経済",
    sentence: "国の**経済{けいざい}**が急速{きゅうそく}に成長{せいちょう}しています。",
    questionText: "What is the correct reading of the bolded word?",
    options: ["けいざい", "けいさつ", "せいじ", "ほうりつ"],
    correctAnswer: "けいざい",
    explanation: "経済 (けいざい - keizai) means 'economy'.",
    englishTranslation: "The country's economy is growing rapidly."
  },
  {
    id: "q38",
    type: "meaning",
    level: 3,
    subject: "技術",
    sentence: "この会社は新しい**技術{ぎじゅつ}**を開発{かいはつ}しました。",
    questionText: "What does the bolded word mean in this sentence?",
    options: ["Technology", "Rule", "Tradition", "Mistake"],
    correctAnswer: "Technology",
    explanation: "技術 (ぎじゅつ - gijutsu) means 'technology / skill'.",
    englishTranslation: "This company developed new technology."
  },
  {
    id: "q39",
    type: "cloze",
    level: 3,
    subject: "議論",
    sentence: "彼らはその問題{もんだい}について何回{なんかい}も[ ]しました。",
    questionText: "Which word completes the sentence to mean 'They debated/discussed that issue many times'?",
    options: ["議論", "決定", "準備", "紹介"],
    correctAnswer: "議論",
    explanation: "議論 (ぎろん - giron) means 'discussion / debate'.",
    englishTranslation: "They debated that issue many times."
  },
  {
    id: "q40",
    type: "reading",
    level: 3,
    subject: "関係",
    sentence: "二つの事件{じけん}には深{ふか}い**関係{かんけい}**があります。",
    questionText: "What is the correct reading of the bolded word?",
    options: ["かんけい", "かんきょう", "かんしん", "かんじょう"],
    correctAnswer: "かんけい",
    explanation: "関係 (かんけい - kankei) means 'relationship / connection'.",
    englishTranslation: "There is a deep connection between the two incidents."
  }
];

export const stripFurigana = (text: string): string => {
  return text.replace(/\{[^}]*\}/g, "");
};

// === SENTENCE TEMPLATES FOR COMPREHENSION & TRANSLATION ===
export interface SentenceTemplate {
  subject: string;
  sentence: string;
  englishTranslation: string;
  level: 5 | 4 | 3;
}

export const SENTENCE_TEMPLATES: SentenceTemplate[] = [
  // === N5 (18 templates) ===
  {
    subject: "先生",
    sentence: "あの**先生{せんせい}**はとても親切{しんせつ}です。",
    englishTranslation: "That teacher is very kind.",
    level: 5
  },
  {
    subject: "日本",
    sentence: "私{わたし}たちは来週{らいしゅう}、**日本{にほん}**に行{い}きます。",
    englishTranslation: "We will go to Japan next week.",
    level: 5
  },
  {
    subject: "女の子",
    sentence: "あそこにかわいい**女の子{おんなのこ}**がいます。",
    englishTranslation: "There is a cute girl over there.",
    level: 5
  },
  {
    subject: "雨",
    sentence: "**雨{あめ}**が降{ふ}っていますから、急{いそ}いで帰り{かえり}ましょう。",
    englishTranslation: "Since it is raining, let's hurry home.",
    level: 5
  },
  {
    subject: "天気",
    sentence: "今日{きょう}はとてもいい**天気{てんき}**ですね。",
    englishTranslation: "Today is very good weather, isn't it?",
    level: 5
  },
  {
    subject: "水",
    sentence: "毎朝{まいあさ}、冷{つめ}たい**水{みず}**を飲{の}みます。",
    englishTranslation: "I drink cold water every morning.",
    level: 5
  },
  {
    subject: "友達",
    sentence: "私{わたし}の**友達{ともだち}**はとても親切{しんせつ}です。",
    englishTranslation: "My friend is very kind.",
    level: 5
  },
  {
    subject: "学生",
    sentence: "あの**学生{がくせい}**は日本語{にほんご}が上手{じょうず}です。",
    englishTranslation: "That student is good at Japanese.",
    level: 5
  },
  {
    subject: "本",
    sentence: "図書館{としょかん}で面白{おもしろ}い**本{ほん}**を借{か}りました。",
    englishTranslation: "I borrowed an interesting book at the library.",
    level: 5
  },
  {
    subject: "車",
    sentence: "駅{えき}の前{まえ}に黒{くろ}い**車{くるま}**があります。",
    englishTranslation: "There is a black car in front of the station.",
    level: 5
  },
  {
    subject: "料理",
    sentence: "母{はは}は美味しい**料理{りょうり}**を作{つく}ってくれました。",
    englishTranslation: "My mother made a delicious meal for me.",
    level: 5
  },
  {
    subject: "勉強",
    sentence: "図書館{としょかん}で日本語{にほんご}を**勉強{べんきょう}**します。",
    englishTranslation: "I study Japanese in the library.",
    level: 5
  },
  {
    subject: "図書館",
    sentence: "私{わたし}はよく静{しず}かな**図書館{としょかん}**へ行{い}きます。",
    englishTranslation: "I often go to the quiet library.",
    level: 5
  },
  {
    subject: "時計",
    sentence: "父{ちち}から新しい**時計{とけい}**を買{か}ってもらいました。",
    englishTranslation: "My father bought me a new watch.",
    level: 5
  },
  {
    subject: "辞書",
    sentence: "わからない言葉{ことば}は**辞書{じしょ}**で調{しら}べます。",
    englishTranslation: "I look up words I don't understand in the dictionary.",
    level: 5
  },
  {
    subject: "音楽",
    sentence: "部屋{へや}で静{しず}かな**音楽{おんがく}**を聞{き}きます。",
    englishTranslation: "I listen to quiet music in my room.",
    level: 5
  },
  {
    subject: "家族",
    sentence: "私{わたし}の**家族{かぞく}**はみんな元気{げんき}です。",
    englishTranslation: "My family is all healthy and doing well.",
    level: 5
  },
  {
    subject: "部屋",
    sentence: "私{わたし}の**部屋{へや}**は狭{せま}いですが、きれいです。",
    englishTranslation: "My room is narrow but clean.",
    level: 5
  },

  // === N4 (16 templates) ===
  {
    subject: "電車",
    sentence: "私{わたし}たちは**電車{でんしゃ}**に乗{の}って行{い}きます。",
    englishTranslation: "We will go by train.",
    level: 4
  },
  {
    subject: "新聞",
    sentence: "祖父{そふ}は毎朝{まいあさ}、**新聞{しんぶん}**を読{よ}みます。",
    englishTranslation: "My grandfather reads the newspaper every morning.",
    level: 4
  },
  {
    subject: "会社",
    sentence: "私{わたし}は明日{あした}、新しい**会社{かいしゃ}**に行{い}きます。",
    englishTranslation: "I am going to the new company tomorrow.",
    level: 4
  },
  {
    subject: "帰国",
    sentence: "彼{かれ}は来週{らいしゅう}の金曜日に**帰国{きこく}**します。",
    englishTranslation: "He is going to return to his country next Friday.",
    level: 4
  },
  {
    subject: "入り口",
    sentence: "駅{えき}の西口の**入り口{いりぐち}**に電話{でんわ}があります。",
    englishTranslation: "There is a telephone at the station's west entrance.",
    level: 4
  },
  {
    subject: "試験",
    sentence: "明日{あした}は日本語{にほんご}の**試験{しけん}**があります。",
    englishTranslation: "There is a Japanese exam tomorrow.",
    level: 4
  },
  {
    subject: "自転車",
    sentence: "学校{がっこう}まで**自転車{じてんしゃ}**で三十分{さんじゅっぷん}かかります。",
    englishTranslation: "It takes thirty minutes to school by bicycle.",
    level: 4
  },
  {
    subject: "医者",
    sentence: "頭{あたま}が痛{いた}いので**医者{いしゃ}**に行{い}きました。",
    englishTranslation: "Because my head hurts, I went to see a doctor.",
    level: 4
  },
  {
    subject: "空港",
    sentence: "あの国際{こくさい}**空港{くうこう}**は広{ひろ}くて新{あたら}しいです。",
    englishTranslation: "That international airport is spacious and new.",
    level: 4
  },
  {
    subject: "台所",
    sentence: "日曜日に**台所{だいどころ}**で料理{りょうり}を作{つく}りました。",
    englishTranslation: "I cooked in the kitchen on Sunday.",
    level: 4
  },
  {
    subject: "働く",
    sentence: "私{わたし}たちはこの工場{こうじょう}で朝から晩まで**働{はたら}く**つもりです。",
    englishTranslation: "We intend to work at this factory from morning till night.",
    level: 4
  },
  {
    subject: "手紙",
    sentence: "彼女{かのじょ}から長{なが}い**手紙{てがみ}**が届{とど}きました。",
    englishTranslation: "A long letter arrived from her.",
    level: 4
  },
  {
    subject: "食堂",
    sentence: "大学{だいがく}の新しい**食堂{しょくどう}**は安{やす}くて美味しいです。",
    englishTranslation: "The university's new cafeteria is cheap and delicious.",
    level: 4
  },
  {
    subject: "携帯",
    sentence: "仕事{しごと}のために新しい**携帯{けいたい}**を使{つか}っています。",
    englishTranslation: "I am using a new mobile phone for work.",
    level: 4
  },
  {
    subject: "運動",
    sentence: "健康{けんこう}のために毎週**運動{うんどう}**をしています。",
    englishTranslation: "I exercise every week for my health.",
    level: 4
  },
  {
    subject: "日記",
    sentence: "私{わたし}は毎日、日本語で**日記{にっき}**を書{か}いています。",
    englishTranslation: "I write a diary in Japanese every day.",
    level: 4
  },

  // === N3 (16 templates) ===
  {
    subject: "最近",
    sentence: "彼{かれ}は**最近{さいきん}**、引{ひ}っ越{こ}しをして忙{いそが}しいです。",
    englishTranslation: "He has been busy recently due to moving.",
    level: 3
  },
  {
    subject: "予定",
    sentence: "来週{らいしゅう}のテストの**予定{よてい}**をカレンダーに書{か}きました。",
    englishTranslation: "I wrote the schedule for next week's test on the calendar.",
    level: 3
  },
  {
    subject: "自信",
    sentence: "私{わたし}は自分{じぶん}の能力{のうりょく}に**自信{じしん}**を持{も}っています。",
    englishTranslation: "I have self-confidence in my own abilities.",
    level: 3
  },
  {
    subject: "会議",
    sentence: "会社{かいしゃ}の重要な**会議{かいぎ}**に出席{しゅっせき}します。",
    englishTranslation: "I will attend the company's important meeting.",
    level: 3
  },
  {
    subject: "新幹線",
    sentence: "京都{きょうと}まで速{はや}い**新幹線{しんかんせん}**で行{い}きました。",
    englishTranslation: "I went to Kyoto by the fast bullet train.",
    level: 3
  },
  {
    subject: "信じる",
    sentence: "私{わたし}は彼{かれ}の言{い}うことを全部{ぜんぶ}**信{しん}じます**。",
    englishTranslation: "I believe everything he says.",
    level: 3
  },
  {
    subject: "準備",
    sentence: "明日{あした}からの旅行{りょこう}の**準備{じゅんび}**をしましょう。",
    englishTranslation: "Let's prepare for the trip starting tomorrow.",
    level: 3
  },
  {
    subject: "紹介",
    sentence: "新{あたら}しく来{き}た先生をみんなに**紹介{しょうかい}**しました。",
    englishTranslation: "I introduced the newly arrived teacher to everyone.",
    level: 3
  },
  {
    subject: "必要",
    sentence: "ビザの申請{しんせい}にはパスポートが**必要{ひつよう}**です。",
    englishTranslation: "A passport is necessary to apply for a visa.",
    level: 3
  },
  {
    subject: "環境",
    sentence: "子育{こそだ}てには良{よ}い**環境{かんきょう}**が大切{たいせつ}です。",
    englishTranslation: "A good environment is important for raising children.",
    level: 3
  },
  {
    subject: "経験",
    sentence: "彼{かれ}は海外{かいがい}で仕事{しごと}をした**経験{けいけん}**があります。",
    englishTranslation: "He has experience working abroad.",
    level: 3
  },
  {
    subject: "経済",
    sentence: "世界{せかい}の**経済{けいざい}**は複雑{ふくざつ}に変化{へんか}しています。",
    englishTranslation: "The world's economy is changing in complex ways.",
    level: 3
  },
  {
    subject: "技術",
    sentence: "この会社は新しい医療{いりょう}**技術{ぎじゅつ}**を開発{かいはつ}しました。",
    englishTranslation: "This company developed new medical technology.",
    level: 3
  },
  {
    subject: "議論",
    sentence: "私たちは環境問題について何時間も**議論{ぎろん}**しました。",
    englishTranslation: "We debated about environmental issues for hours.",
    level: 3
  },
  {
    subject: "関係",
    sentence: "その二つの事件{じけん}には何{なに}か**関係{かんけい}**がありますか。",
    englishTranslation: "Is there any connection between those two incidents?",
    level: 3
  },
  {
    subject: "解決",
    sentence: "みんなの協力でこの難しい問題を**解決{かいけつ}**しました。",
    englishTranslation: "We resolved this difficult problem with everyone's cooperation.",
    level: 3
  }
];

// === DYNAMIC PRACTICE QUESTION GENERATOR ===
// Generates a massive pool of questions dynamically covering N5/4/3 Kanji and vocabulary

const allMeanings = Array.from(new Set(KANJI_DATASET.flatMap((k) => k.meanings)));
const allOnyomi = Array.from(new Set(KANJI_DATASET.flatMap((k) => k.onyomi)));
const allKunyomi = Array.from(new Set(KANJI_DATASET.flatMap((k) => k.kunyomi)));
const allVocabWords = Array.from(new Set(KANJI_DATASET.flatMap((k) => k.examples.map((ex) => ex.word))));
const allVocabReadings = Array.from(new Set(KANJI_DATASET.flatMap((k) => k.examples.map((ex) => ex.reading))));
const allVocabMeanings = Array.from(new Set(KANJI_DATASET.flatMap((k) => k.examples.map((ex) => ex.meaning))));
const allKanjis = KANJI_DATASET.map((k) => k.kanji);

const shuffle = <T>(arr: T[]): T[] => {
  return [...arr].sort(() => 0.5 - Math.random());
};

const getDistractors = (pool: string[], correct: string, count: number): string[] => {
  const filtered = pool.filter((x) => x !== correct && x.trim() !== "");
  const shuffled = shuffle(filtered);
  return shuffled.slice(0, count);
};

const cleanReading = (r: string) => r.replace(/\./g, "").replace(/-/g, "");

const generateQuestions = (): Question[] => {
  const generated: Question[] = [];
  const processedVocab = new Set<string>();

  KANJI_DATASET.forEach((k) => {
    const level = k.jlpt as 5 | 4 | 3;
    const kanji = k.kanji;
    const meanings = k.meanings;
    const onyomi = k.onyomi;
    const kunyomi = k.kunyomi;
    const strokeCount = k.strokeCount;

    // --- 1. Kanji Character Questions (Total 70 per Kanji subject) ---

    // A. Meanings (5 variants)
    for (let i = 0; i < 5; i++) {
      const correctMeaning = meanings[0];
      const dist = getDistractors(allMeanings, correctMeaning, 3);
      generated.push({
        id: `g_k_meaning_${kanji}_v${i}`,
        type: "meaning",
        level,
        subject: kanji,
        sentence: `漢字【${kanji}】`,
        questionText: `What is the correct English meaning of the Kanji 【${kanji}】?`,
        options: shuffle([correctMeaning, ...dist]),
        correctAnswer: correctMeaning,
        explanation: `The Kanji 【${kanji}】 means '${correctMeaning}'.`,
        englishTranslation: `Meaning of Kanji 【${kanji}】`
      });
    }

    // B. Reverse Meanings (5 variants)
    for (let i = 0; i < 5; i++) {
      const correctMeaning = meanings[0];
      const dist = getDistractors(allKanjis, kanji, 3);
      generated.push({
        id: `g_k_rev_meaning_${kanji}_v${i}`,
        type: "kanji_select",
        level,
        subject: kanji,
        sentence: `Meaning: "${correctMeaning}"`,
        questionText: `Which Kanji represents the meaning "${correctMeaning}"?`,
        options: shuffle([kanji, ...dist]),
        correctAnswer: kanji,
        explanation: `The Kanji for '${correctMeaning}' is 【${kanji}】.`,
        englishTranslation: `Select Kanji for "${correctMeaning}"`
      });
    }

    // C. Onyomi Readings (5 variants) & Reverse Onyomi (5 variants)
    if (onyomi.length > 0) {
      const correctOnyomi = onyomi[0];
      for (let i = 0; i < 5; i++) {
        const dist = getDistractors(allOnyomi, correctOnyomi, 3);
        generated.push({
          id: `g_k_onyomi_${kanji}_v${i}`,
          type: "reading",
          level,
          subject: kanji,
          sentence: `漢字【${kanji}】`,
          questionText: `Which of the following is a correct Onyomi (Chinese reading) of the Kanji 【${kanji}】?`,
          options: shuffle([correctOnyomi, ...dist]),
          correctAnswer: correctOnyomi,
          explanation: `The Onyomi reading for 【${kanji}】 is '${onyomi.join(", ")}'.`,
          englishTranslation: `Onyomi of Kanji 【${kanji}】`
        });
      }

      for (let i = 0; i < 5; i++) {
        const dist = getDistractors(allKanjis, kanji, 3);
        generated.push({
          id: `g_k_rev_onyomi_${kanji}_v${i}`,
          type: "kanji_select",
          level,
          subject: kanji,
          sentence: `Onyomi: "${correctOnyomi}"`,
          questionText: `Which Kanji is read as "${correctOnyomi}" in Onyomi?`,
          options: shuffle([kanji, ...dist]),
          correctAnswer: kanji,
          explanation: `The Kanji read as '${correctOnyomi}' in Onyomi is 【${kanji}】.`,
          englishTranslation: `Select Kanji for Onyomi "${correctOnyomi}"`
        });
      }
    } else {
      // Fallback Meaning variants to keep 70 questions consistent
      for (let i = 5; i < 15; i++) {
        const correctMeaning = meanings[0];
        const dist = getDistractors(allMeanings, correctMeaning, 3);
        generated.push({
          id: `g_k_meaning_fb_${kanji}_v${i}`,
          type: "meaning",
          level,
          subject: kanji,
          sentence: `漢字【${kanji}】`,
          questionText: `What is the correct English meaning of the Kanji 【${kanji}】?`,
          options: shuffle([correctMeaning, ...dist]),
          correctAnswer: correctMeaning,
          explanation: `The Kanji 【${kanji}】 means '${correctMeaning}'.`,
          englishTranslation: `Meaning of Kanji 【${kanji}】`
        });
      }
    }

    // D. Kunyomi Readings (5 variants) & Reverse Kunyomi (5 variants)
    if (kunyomi.length > 0) {
      const correctKunyomi = cleanReading(kunyomi[0]);
      for (let i = 0; i < 5; i++) {
        const dist = getDistractors(allKunyomi.map(cleanReading), correctKunyomi, 3);
        generated.push({
          id: `g_k_kunyomi_${kanji}_v${i}`,
          type: "reading",
          level,
          subject: kanji,
          sentence: `漢字【${kanji}】`,
          questionText: `Which of the following is a correct Kunyomi (Japanese reading) of the Kanji 【${kanji}】?`,
          options: shuffle([correctKunyomi, ...dist]),
          correctAnswer: correctKunyomi,
          explanation: `The Kunyomi reading for 【${kanji}】 is '${kunyomi.map(cleanReading).join(", ")}'.`,
          englishTranslation: `Kunyomi of Kanji 【${kanji}】`
        });
      }

      for (let i = 0; i < 5; i++) {
        const dist = getDistractors(allKanjis, kanji, 3);
        generated.push({
          id: `g_k_rev_kunyomi_${kanji}_v${i}`,
          type: "kanji_select",
          level,
          subject: kanji,
          sentence: `Kunyomi: "${correctKunyomi}"`,
          questionText: `Which Kanji is read as "${correctKunyomi}" in Kunyomi?`,
          options: shuffle([kanji, ...dist]),
          correctAnswer: kanji,
          explanation: `The Kanji read as '${correctKunyomi}' in Kunyomi is 【${kanji}】.`,
          englishTranslation: `Select Kanji for Kunyomi "${correctKunyomi}"`
        });
      }
    } else {
      // Fallback Reverse Meaning variants
      for (let i = 5; i < 15; i++) {
        const correctMeaning = meanings[0];
        const dist = getDistractors(allKanjis, kanji, 3);
        generated.push({
          id: `g_k_rev_meaning_fb_${kanji}_v${i}`,
          type: "kanji_select",
          level,
          subject: kanji,
          sentence: `Meaning: "${correctMeaning}"`,
          questionText: `Which Kanji represents the meaning "${correctMeaning}"?`,
          options: shuffle([kanji, ...dist]),
          correctAnswer: kanji,
          explanation: `The Kanji for '${correctMeaning}' is 【${kanji}】.`,
          englishTranslation: `Select Kanji for "${correctMeaning}"`
        });
      }
    }

    // E. Stroke Count (5 variants) & Reverse Stroke Count (5 variants)
    for (let i = 0; i < 5; i++) {
      const correctStroke = `${strokeCount} strokes`;
      const dists: string[] = [];
      let delta = 1;
      while (dists.length < 3) {
        const low = strokeCount - delta;
        const high = strokeCount + delta;
        if (low > 0 && !dists.includes(`${low} strokes`)) dists.push(`${low} strokes`);
        if (dists.length < 3 && !dists.includes(`${high} strokes`)) dists.push(`${high} strokes`);
        delta++;
      }
      generated.push({
        id: `g_k_stroke_${kanji}_v${i}`,
        type: "meaning",
        level,
        subject: kanji,
        sentence: `漢字【${kanji}】`,
        questionText: `How many strokes does the Kanji character 【${kanji}】 have?`,
        options: shuffle([correctStroke, ...dists]),
        correctAnswer: correctStroke,
        explanation: `The Kanji 【${kanji}】 has ${strokeCount} strokes.`,
        englishTranslation: `Stroke count of Kanji 【${kanji}】`
      });
    }

    for (let i = 0; i < 5; i++) {
      const dist = getDistractors(allKanjis, kanji, 3);
      generated.push({
        id: `g_k_rev_stroke_${kanji}_v${i}`,
        type: "kanji_select",
        level,
        subject: kanji,
        sentence: `Strokes: ${strokeCount}`,
        questionText: `Which of the following Kanji characters has exactly ${strokeCount} strokes?`,
        options: shuffle([kanji, ...dist]),
        correctAnswer: kanji,
        explanation: `The Kanji 【${kanji}】 has exactly ${strokeCount} strokes.`,
        englishTranslation: `Select Kanji with ${strokeCount} strokes`
      });
    }

    // F. Vocab Example Associations (30 questions)
    k.examples.forEach((ex, idx) => {
      if (idx >= 3) return; // limit to first 3 examples

      for (let i = 0; i < 3; i++) {
        const correctWord = ex.word;
        const dist = getDistractors(allVocabWords, correctWord, 3);
        generated.push({
          id: `g_k_vocab_word_${kanji}_ex${idx}_v${i}`,
          type: "kanji_select",
          level,
          subject: kanji,
          sentence: `Reading: "${ex.reading}" | Meaning: "${ex.meaning}"`,
          questionText: `Which vocabulary word containing the Kanji 【${kanji}】 is read as "${ex.reading}"?`,
          options: shuffle([correctWord, ...dist]),
          correctAnswer: correctWord,
          explanation: `The word is 【${ex.word}】 (read as ${ex.reading}), meaning '${ex.meaning}'.`,
          englishTranslation: `Select vocabulary word containing 【${kanji}】`
        });
      }

      for (let i = 0; i < 3; i++) {
        const correctReading = ex.reading;
        const dist = getDistractors(allVocabReadings, correctReading, 3);
        generated.push({
          id: `g_k_vocab_read_${kanji}_ex${idx}_v${i}`,
          type: "reading",
          level,
          subject: kanji,
          sentence: `Vocabulary: 【${ex.word}】`,
          questionText: `What is the correct reading of the vocabulary word 【${ex.word}】 which contains the Kanji 【${kanji}】?`,
          options: shuffle([correctReading, ...dist]),
          correctAnswer: correctReading,
          explanation: `【${ex.word}】 is read as '${ex.reading}'.`,
          englishTranslation: `Reading of vocabulary word 【${ex.word}】`
        });
      }

      for (let i = 0; i < 4; i++) {
        const correctMeaning = ex.meaning;
        const dist = getDistractors(allVocabMeanings, correctMeaning, 3);
        generated.push({
          id: `g_k_vocab_mean_${kanji}_ex${idx}_v${i}`,
          type: "meaning",
          level,
          subject: kanji,
          sentence: `Vocabulary: 【${ex.word}】 (read as: ${ex.reading})`,
          questionText: `What is the correct meaning of the vocabulary word 【${ex.word}】 which contains the Kanji 【${kanji}】?`,
          options: shuffle([correctMeaning, ...dist]),
          correctAnswer: correctMeaning,
          explanation: `【${ex.word}】 means '${ex.meaning}'.`,
          englishTranslation: `Meaning of vocabulary word 【${ex.word}】`
        });
      }
    });

    // Fill to hit exactly 70 questions if there are fewer than 3 examples
    const kanjiCount = () => generated.filter((q) => q.subject === kanji).length;
    let fallbackCount = 0;
    while (kanjiCount() < 70) {
      const correctMeaning = meanings[0];
      const dist = getDistractors(allMeanings, correctMeaning, 3);
      generated.push({
        id: `g_k_fill_${kanji}_v${fallbackCount}`,
        type: "meaning",
        level,
        subject: kanji,
        sentence: `漢字【${kanji}】`,
        questionText: `Choose the correct meaning of the Kanji 【${kanji}】 (Practice card ${fallbackCount + 1}).`,
        options: shuffle([correctMeaning, ...dist]),
        correctAnswer: correctMeaning,
        explanation: `The Kanji 【${kanji}】 means '${correctMeaning}'.`,
        englishTranslation: `Meaning of Kanji 【${kanji}】`
      });
      fallbackCount++;
    }

    // --- 2. Vocabulary Word Questions (Exactly 5 per Vocab word subject) ---
    k.examples.forEach((ex) => {
      const vocabWord = ex.word;
      const vocabReading = ex.reading;
      const vocabMeaning = ex.meaning;

      if (processedVocab.has(vocabWord)) return;
      processedVocab.add(vocabWord);

      // A. Reading
      const readDist = getDistractors(allVocabReadings, vocabReading, 3);
      generated.push({
        id: `g_v_read_${vocabWord}`,
        type: "reading",
        level,
        subject: vocabWord,
        sentence: `単語: 【${vocabWord}】`,
        questionText: `What is the correct reading of the word 【${vocabWord}】?`,
        options: shuffle([vocabReading, ...readDist]),
        correctAnswer: vocabReading,
        explanation: `【${vocabWord}】 is read as '${vocabReading}'.`,
        englishTranslation: `Reading of 【${vocabWord}】`
      });

      // B. Meaning
      const meanDist = getDistractors(allVocabMeanings, vocabMeaning, 3);
      generated.push({
        id: `g_v_mean_${vocabWord}`,
        type: "meaning",
        level,
        subject: vocabWord,
        sentence: `単語: 【${vocabWord}】 (${vocabReading})`,
        questionText: `What does the word 【${vocabWord}】 mean?`,
        options: shuffle([vocabMeaning, ...meanDist]),
        correctAnswer: vocabMeaning,
        explanation: `【${vocabWord}】 means '${vocabMeaning}'.`,
        englishTranslation: `Meaning of 【${vocabWord}】`
      });

      // C. Kanji Select
      const wordDist = getDistractors(allVocabWords, vocabWord, 3);
      generated.push({
        id: `g_v_kanji_${vocabWord}`,
        type: "kanji_select",
        level,
        subject: vocabWord,
        sentence: `読み: "${vocabReading}" | 意味: "${vocabMeaning}"`,
        questionText: `How do you write the word read as "${vocabReading}" in Kanji?`,
        options: shuffle([vocabWord, ...wordDist]),
        correctAnswer: vocabWord,
        explanation: `The word is written as 【${vocabWord}】.`,
        englishTranslation: `Write "${vocabReading}" in Kanji`
      });

      // D. Reverse Meaning
      generated.push({
        id: `g_v_rev_mean_${vocabWord}`,
        type: "kanji_select",
        level,
        subject: vocabWord,
        sentence: `Meaning: "${vocabMeaning}"`,
        questionText: `Which Japanese word represents the meaning "${vocabMeaning}"?`,
        options: shuffle([vocabWord, ...wordDist]),
        correctAnswer: vocabWord,
        explanation: `The word for '${vocabMeaning}' is 【${vocabWord}】.`,
        englishTranslation: `Vocabulary for "${vocabMeaning}"`
      });

      // E. Cloze Spelling
      const clozeText = vocabWord.length >= 2 
        ? vocabWord.substring(0, vocabWord.length - 1) + "[ ]" 
        : "[ ]";
      const correctChar = vocabWord.length >= 2 
        ? vocabWord.substring(vocabWord.length - 1) 
        : vocabWord;
      const charDist = getDistractors(allKanjis, correctChar, 3);
      generated.push({
        id: `g_v_cloze_${vocabWord}`,
        type: "cloze",
        level,
        subject: vocabWord,
        sentence: `単語: 【${clozeText}】 (read as: ${vocabReading}, meaning: ${vocabMeaning})`,
        questionText: `Which Kanji character correctly completes the blank in 【${clozeText}】?`,
        options: shuffle([correctChar, ...charDist]),
        correctAnswer: correctChar,
        explanation: `The word is written as 【${vocabWord}】.`,
        englishTranslation: `Complete the word 【${vocabWord}】`
      });
    });
  });

  const MANUAL_ONLY_VOCAB: Record<string, { reading: string; meaning: string; level: 5 | 4 | 3 }> = {
    会社: { reading: "かいしゃ", meaning: "company", level: 4 },
    予定: { reading: "よてい", meaning: "plans / schedule", level: 3 },
    自信: { reading: "じしん", meaning: "self-confidence", level: 3 },
    会議: { reading: "かいぎ", meaning: "meeting", level: 3 },
    新幹線: { reading: "しんかんせん", meaning: "bullet train", level: 3 },
    帰国: { reading: "きこく", meaning: "return to one's country", level: 4 },
    入り口: { reading: "いりぐち", meaning: "entrance", level: 4 },
    紹介: { reading: "しょうかい", meaning: "introduction", level: 3 },
    環境: { reading: "かんきょう", meaning: "environment", level: 3 },
    議論: { reading: "ぎろん", meaning: "discussion / debate", level: 3 },
    解決: { reading: "かいけつ", meaning: "resolution / solving", level: 3 }
  };

  Object.entries(MANUAL_ONLY_VOCAB).forEach(([vocabWord, info]) => {
    if (processedVocab.has(vocabWord)) return;
    processedVocab.add(vocabWord);

    const vocabReading = info.reading;
    const vocabMeaning = info.meaning;
    const level = info.level;

    // A. Reading
    const readDist = getDistractors(allVocabReadings, vocabReading, 3);
    generated.push({
      id: `g_v_read_${vocabWord}`,
      type: "reading",
      level,
      subject: vocabWord,
      sentence: `単語: 【${vocabWord}】`,
      questionText: `What is the correct reading of the word 【${vocabWord}】?`,
      options: shuffle([vocabReading, ...readDist]),
      correctAnswer: vocabReading,
      explanation: `【${vocabWord}】 is read as '${vocabReading}'.`,
      englishTranslation: `Reading of 【${vocabWord}】`
    });

    // B. Meaning
    const meanDist = getDistractors(allVocabMeanings, vocabMeaning, 3);
    generated.push({
      id: `g_v_mean_${vocabWord}`,
      type: "meaning",
      level,
      subject: vocabWord,
      sentence: `単語: 【${vocabWord}】 (${vocabReading})`,
      questionText: `What does the word 【${vocabWord}】 mean?`,
      options: shuffle([vocabMeaning, ...meanDist]),
      correctAnswer: vocabMeaning,
      explanation: `【${vocabWord}】 means '${vocabMeaning}'.`,
      englishTranslation: `Meaning of 【${vocabWord}】`
    });

    // C. Kanji Select
    const wordDist = getDistractors(allVocabWords, vocabWord, 3);
    generated.push({
      id: `g_v_kanji_${vocabWord}`,
      type: "kanji_select",
      level,
      subject: vocabWord,
      sentence: `読み: "${vocabReading}" | 意味: "${vocabMeaning}"`,
      questionText: `How do you write the word read as "${vocabReading}" in Kanji?`,
      options: shuffle([vocabWord, ...wordDist]),
      correctAnswer: vocabWord,
      explanation: `The word is written as 【${vocabWord}】.`,
      englishTranslation: `Write "${vocabReading}" in Kanji`
    });

    // D. Reverse Meaning
    generated.push({
      id: `g_v_rev_mean_${vocabWord}`,
      type: "kanji_select",
      level,
      subject: vocabWord,
      sentence: `Meaning: "${vocabMeaning}"`,
      questionText: `Which Japanese word represents the meaning "${vocabMeaning}"?`,
      options: shuffle([vocabWord, ...wordDist]),
      correctAnswer: vocabWord,
      explanation: `The word for '${vocabMeaning}' is 【${vocabWord}】.`,
      englishTranslation: `Vocabulary for "${vocabMeaning}"`
    });

    // E. Cloze Spelling
    const clozeText = vocabWord.length >= 2 
      ? vocabWord.substring(0, vocabWord.length - 1) + "[ ]" 
      : "[ ]";
    const correctChar = vocabWord.length >= 2 
      ? vocabWord.substring(vocabWord.length - 1) 
      : vocabWord;
    const charDist = getDistractors(allKanjis, correctChar, 3);
    generated.push({
      id: `g_v_cloze_${vocabWord}`,
      type: "cloze",
      level,
      subject: vocabWord,
      sentence: `単語: 【${clozeText}】 (read as: ${vocabReading}, meaning: ${vocabMeaning})`,
      questionText: `Which Kanji character correctly completes the blank in 【${clozeText}】?`,
      options: shuffle([correctChar, ...charDist]),
      correctAnswer: correctChar,
      explanation: `The word is written as 【${vocabWord}】.`,
      englishTranslation: `Complete the word 【${vocabWord}】`
    });
  });

  // --- 3. Dynamic Sentence-Level Cloze & Translation Questions ---
  SENTENCE_TEMPLATES.forEach((temp, index) => {
    const subject = temp.subject;
    const cleanJp = temp.sentence.replace(/\*\*([^*]+)\*\?/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1"); // strip bold markers
    const clozeJp = temp.sentence.replace(/\*\*([^*]+)\*\?/g, "[ ]").replace(/\*\*([^*]+)\*\*/g, "[ ]"); // replace bold with blank [ ]
    const level = temp.level;

    // Distractors for JP -> EN translation (other English translations from the pool)
    const enDist = getDistractors(
      SENTENCE_TEMPLATES.map((t) => t.englishTranslation),
      temp.englishTranslation,
      3
    );

    // Distractors for EN -> JP translation (other clean Japanese sentences from the pool with furigana stripped)
    const cleanJpList = SENTENCE_TEMPLATES.map((t) => stripFurigana(t.sentence.replace(/\*\*([^*]+)\*\*/g, "$1")));
    const correctCleanJp = stripFurigana(cleanJp);
    const jpDist = getDistractors(cleanJpList, correctCleanJp, 3);

    // Distractors for sentence cloze: other vocabulary words
    const allSubjects = Array.from(new Set(SENTENCE_TEMPLATES.map((t) => t.subject)));
    const clozeDist = getDistractors(allSubjects, subject, 3);

    // A. JP -> EN Translation (Hard)
    generated.push({
      id: `g_s_tr_jp_en_${index}_${subject}`,
      type: "translate_jp_en",
      level,
      subject,
      sentence: cleanJp,
      questionText: "Choose the correct English translation for this Japanese sentence.",
      options: shuffle([temp.englishTranslation, ...enDist]),
      correctAnswer: temp.englishTranslation,
      explanation: `The sentence translates to: "${temp.englishTranslation}". Key word: 【${subject}】.`,
      englishTranslation: temp.englishTranslation
    });

    // B. EN -> JP Translation (Expert)
    generated.push({
      id: `g_s_tr_en_jp_${index}_${subject}`,
      type: "translate_en_jp",
      level,
      subject,
      sentence: temp.englishTranslation,
      questionText: "Choose the correct Japanese translation for this English sentence.",
      options: shuffle([correctCleanJp, ...jpDist]),
      correctAnswer: correctCleanJp,
      explanation: `The English sentence translates to Japanese as: "${correctCleanJp}". Key word: 【${subject}】.`,
      englishTranslation: temp.englishTranslation
    });

    // C. Sentence Cloze (Hard)
    generated.push({
      id: `g_s_cloze_${index}_${subject}`,
      type: "cloze",
      level,
      subject,
      sentence: clozeJp,
      questionText: "Which word best completes the blank in the sentence?",
      options: shuffle([subject, ...clozeDist]),
      correctAnswer: subject,
      explanation: `The sentence is: "${cleanJp}" (translates to: "${temp.englishTranslation}"). The correct word is 【${subject}】.`,
      englishTranslation: temp.englishTranslation
    });
  });

  return generated;
};

export const PRACTICE_QUESTIONS: Question[] = [
  ...MANUAL_QUESTIONS,
  ...generateQuestions()
];
