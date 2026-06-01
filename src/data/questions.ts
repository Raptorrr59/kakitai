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

export const PRACTICE_QUESTIONS: Question[] = [
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
    sentence: "来週{らいしゅう}のテストの[ ]を決{き}めました。",
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
      "学校 of 出口に電話があります。",
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
    targetWord: "必要",
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
    targetWord: "環境",
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
    targetWord: "けいけん",
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
    targetWord: "経済",
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
    targetWord: "技術",
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
    targetWord: "関係",
    questionText: "What is the correct reading of the bolded word?",
    options: ["かんけい", "かんきょう", "かんしん", "かんじょう"],
    correctAnswer: "かんけい",
    explanation: "関係 (かんけい - kankei) means 'relationship / connection'.",
    englishTranslation: "There is a deep connection between the two incidents."
  }
];
