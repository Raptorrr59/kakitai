import { KANJI_DATASET } from "./kanji";
import n5VocabJson from "./n5-vocab.json";
import n4VocabJson from "./n4-vocab.json";
import n3VocabJson from "./n3-vocab.json";

interface VocabItem {
  word: string;
  meaning: string;
  furigana: string;
  romaji: string;
  level: number;
}

interface VocabJsonType {
  total: number;
  offset: number;
  limit: number;
  words: VocabItem[];
}

const n5Vocab: VocabJsonType = n5VocabJson as any;
const n4Vocab: VocabJsonType = n4VocabJson as any;
const n3Vocab: VocabJsonType = n3VocabJson as any;

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

export const MANUAL_QUESTIONS: Question[] = [
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
    type: "reading",
    level: 3,
    subject: "関係",
    sentence: "二つの事件{じけん}には深{ふか}い**関係{かんけい}**があります。",
    questionText: "What is the correct reading of the bolded word?",
    options: ["かんけい", "かんきょう", "かんしん", "かんじょう"],
    correctAnswer: "かんけい",
    explanation: "関係 (かんけい - kankei) means 'relationship / connection'.",
    englishTranslation: "There is a deep connection between the two incidents."
  },
  // === N5 Hiragana-only Vocabulary & Reading Questions ===
  {
    id: "n5_hira_vocab_1",
    type: "cloze",
    level: 5,
    subject: "あめ",
    sentence: "きのうは　[ ]が　たくさん　ふりました。",
    questionText: "Choose the word in Hiragana that best completes the sentence.",
    options: ["あめ", "かぜ", "ゆき", "くも"],
    correctAnswer: "あめ",
    explanation: "あめ (ame) means 'rain'. ゆき (yuki) is snow, かぜ (kaze) is wind, and くも (kumo) is cloud. 降る (ふります) is used for rain or snow falling.",
    englishTranslation: "Yesterday, it rained a lot."
  },
  {
    id: "n5_hira_vocab_2",
    type: "cloze",
    level: 5,
    subject: "まいあさ",
    sentence: "わたしは　[ ]　おちゃを　のみます。",
    questionText: "Choose the word in Hiragana that best completes the sentence.",
    options: ["まいあさ", "まいねん", "きのう", "おととい"],
    correctAnswer: "まいあさ",
    explanation: "まいあさ (maiasa) means 'every morning'. まいねん is every year, きのう is yesterday, and おととい is the day before yesterday.",
    englishTranslation: "I drink green tea every morning."
  },
  {
    id: "n5_hira_vocab_3",
    type: "cloze",
    level: 5,
    subject: "にほん",
    sentence: "つくえの　うえに　えんぴつが　[ ]　あります。",
    questionText: "Choose the correct counter for pencils.",
    options: ["にほん", "にまい", "にさつ", "にだい"],
    correctAnswer: "にほん",
    explanation: "〜ほん (hon/pon/bon) is the counter for long, cylindrical objects like pencils (えんぴつ). 〜まい is for flat objects, 〜さつ for books, and 〜だい for machines/vehicles.",
    englishTranslation: "There are two pencils on the desk."
  },
  {
    id: "n5_hira_vocab_4",
    type: "cloze",
    level: 5,
    subject: "かり",
    sentence: "としょかんで　ほんを　[ ]ました。",
    questionText: "Choose the verb stem in Hiragana that best completes the sentence.",
    options: ["かり", "かし", "おき", "ふり"],
    correctAnswer: "かり",
    explanation: "借りる (かりる - kariru) means 'to borrow'. 貸す (かす) is to lend, 起きる (おきる) is to wake up, and 降る (ふる) is to fall (rain/snow).",
    englishTranslation: "I borrowed a book at the library."
  },
  {
    id: "n5_hira_vocab_5",
    type: "cloze",
    level: 5,
    subject: "あらいます",
    sentence: "あさ　おきてから、　かおを　[ ]。",
    questionText: "Choose the verb in Hiragana that best completes the sentence.",
    options: ["あらいます", "みがきます", "しめます", "あけます"],
    correctAnswer: "あらいます",
    explanation: "洗う (あらう - arau) means 'to wash'. 顔 (かお - kao) means 'face'. みがきます is to brush/polish, しめます is to close, and あけます is to open.",
    englishTranslation: "I wash my face after waking up in the morning."
  },
  {
    id: "n5_hira_vocab_6",
    type: "cloze",
    level: 5,
    subject: "あつい",
    sentence: "きょうは　てんと　[ ]から、　プールに　いきたいです。",
    questionText: "Choose the adjective in Hiragana that best completes the sentence.",
    options: ["あつい", "さむい", "やすい", "くらい"],
    correctAnswer: "あつい",
    explanation: "暑い (あつい - atsui) means 'hot' (weather). さむい is cold, やすい is cheap, and くらい is dark.",
    englishTranslation: "Since it is very hot today, I want to go to the pool."
  },
  {
    id: "n5_hira_vocab_7",
    type: "cloze",
    level: 5,
    subject: "こうえん",
    sentence: "あした　ともだちと　[ ]で　さんぽを　します。",
    questionText: "Choose the place in Hiragana that best completes the sentence.",
    options: ["こうえん", "きっさてん", "びょういん", "れいぞうこ"],
    correctAnswer: "こうえん",
    explanation: "公園 (こうえん - kōen) means 'park'. 喫茶店 (きっさてん) is coffee shop, 病院 (びょういん) is hospital, and 冷蔵庫 (れいぞうこ) is refrigerator.",
    englishTranslation: "Tomorrow, I will take a walk in the park with my friend."
  },
  {
    id: "n5_hira_vocab_8",
    type: "cloze",
    level: 5,
    subject: "はがき",
    sentence: "ゆうびんきょくで　きってと　[ ]を　かいました。",
    questionText: "Choose the noun in Hiragana that best completes the sentence.",
    options: ["はがき", "はこ", "はし", "はな"],
    correctAnswer: "はがき",
    explanation: "葉書 (はがき - hagaki) means 'postcard'. 切手 (きって) means 'stamps'. はこ is box, はし is chopsticks/bridge, and はな is flower/nose.",
    englishTranslation: "I bought stamps and postcards at the post office."
  },
  {
    id: "n5_hira_vocab_9",
    type: "cloze",
    level: 5,
    subject: "みがきます",
    sentence: "ごはんを　たべてから、　はを　[ ]。",
    questionText: "Choose the verb in Hiragana that best completes the sentence.",
    options: ["みがきます", "あびます", "ぬぎます", "おきます"],
    correctAnswer: "みがきます",
    explanation: "磨く (みがく - migaku) means 'to brush/polish'. 歯 (は - ha) means 'teeth'. あびます is to take a shower, ぬぎます is to take off clothes, and おきます is to put/wake up.",
    englishTranslation: "I brush my teeth after eating my meal."
  },
  {
    id: "n5_hira_vocab_10",
    type: "cloze",
    level: 5,
    subject: "おくさん",
    sentence: "やまださんの　[ ]は　とても　きれいな　ひとです。",
    questionText: "Choose the word in Hiragana that best completes the sentence.",
    options: ["おくさん", "おねえさん", "おとうと", "おじいさん"],
    correctAnswer: "おくさん",
    explanation: "奥さん (おくさん - okusan) means 'someone else's wife'. おねえさん is older sister, おとうと is younger brother, and おじいさん is grandfather.",
    englishTranslation: "Mr. Yamada's wife is a very beautiful person."
  },
  {
    id: "n5_hira_vocab_11",
    type: "cloze",
    level: 5,
    subject: "こうちゃ",
    sentence: "きっさてんで　コーヒーと　[ ]を　ちゅうもんしました。",
    questionText: "Choose the drink in Hiragana that best completes the sentence.",
    options: ["こうちゃ", "ごはん", "しお", "さとう"],
    correctAnswer: "こうちゃ",
    explanation: "紅茶 (こうちゃ - kōcha) means 'black tea'. ごはん is cooked rice, しお is salt, and さとう is sugar.",
    englishTranslation: "I ordered coffee and black tea at the coffee shop."
  },
  {
    id: "n5_hira_vocab_12",
    type: "cloze",
    level: 5,
    subject: "しずか",
    sentence: "よる of としょかんは　とても　[ ]です。",
    questionText: "Choose the adjective in Hiragana that best completes the sentence.",
    options: ["しずか", "にぎやか", "ひま", "じょうぶ"],
    correctAnswer: "しずか",
    explanation: "静か (しずか - shizuka) means 'quiet'. にぎやか is bustling/lively, ひま is free/idle, and じょうぶ is durable/strong.",
    englishTranslation: "The library at night is very quiet."
  },
  {
    id: "n5_hira_vocab_13",
    type: "cloze",
    level: 5,
    subject: "おとうと",
    sentence: "わたしの　[ ]は　しょうがっこうの　せいとです。",
    questionText: "Choose the family relation in Hiragana that best completes the sentence.",
    options: ["おとうと", "おとうさん", "おじさん", "おばあさん"],
    correctAnswer: "おとうと",
    explanation: "弟 (おとうと - otōto) means 'younger brother'. おとうさん is father, おじさん is uncle, and おばあさん is grandmother.",
    englishTranslation: "My younger brother is an elementary school student."
  },
  {
    id: "n5_hira_vocab_14",
    type: "cloze",
    level: 5,
    subject: "やすみ",
    sentence: "らいしゅうの　きんようびは　がっこうの　[ ]です。",
    questionText: "Choose the noun in Hiragana that best completes the sentence.",
    options: ["やすみ", "じゅぎょう", "へや", "しゅくだい"],
    correctAnswer: "やすみ",
    explanation: "休み (やすみ - yasumi) means 'holiday/break'. 授業 (じゅぎょう) is lesson, へや is room, and 宿題 (しゅくだい) is homework.",
    englishTranslation: "Next week's Friday is a school holiday."
  },
  {
    id: "n5_hira_vocab_15",
    type: "cloze",
    level: 5,
    subject: "きっぷ",
    sentence: "えきで　でんしゃの　[ ]を　かいました。",
    questionText: "Choose the noun in Hiragana that best completes the sentence.",
    options: ["きっぷ", "さいふ", "てがみ", "ちず"],
    correctAnswer: "きっぷ",
    explanation: "切符 (きっぷ - kippu) means 'ticket'. さいふ is wallet, てがみ is letter, and ちず is map.",
    englishTranslation: "I bought a train ticket at the station."
  },
  {
    id: "n5_hira_vocab_16",
    type: "cloze",
    level: 5,
    subject: "あびます",
    sentence: "おきてから、　シャワーを　[ ]。",
    questionText: "Choose the verb in Hiragana that best completes the sentence.",
    options: ["あびます", "のみます", "よみます", "はきます"],
    correctAnswer: "あびます",
    explanation: "浴びる (あびる - abiru) means 'to bathe/pour over oneself'. シャワーをあびる is the phrase for taking a shower. はきます is to wear on lower body.",
    englishTranslation: "After waking up, I take a shower."
  },
  {
    id: "n5_hira_vocab_17",
    type: "cloze",
    level: 5,
    subject: "くらい",
    sentence: "この　へやは　でんきが　ありませんから　[ ]です。",
    questionText: "Choose the adjective in Hiragana that best completes the sentence.",
    options: ["くらい", "あかるい", "ひろい", "あつい"],
    correctAnswer: "くらい",
    explanation: "暗い (くらい - kurai) means 'dark'. Bright is あかるい, spacious is ひろい, and hot is あつい.",
    englishTranslation: "Because this room has no electric lights, it is dark."
  },
  {
    id: "n5_hira_vocab_18",
    type: "cloze",
    level: 5,
    subject: "おそく",
    sentence: "きのうの　よるは　[ ]まで　べんきょうしました。",
    questionText: "Choose the adverb in Hiragana that best completes the sentence.",
    options: ["おそく", "はやく", "ゆっくり", "まっすぐ"],
    correctAnswer: "おそく",
    explanation: "遅く (おそく - osoku) means 'late'. 遅くまで means 'until late'. はやく is early/fast,ゆっくり is slowly, and まっすぐ is straight.",
    englishTranslation: "Yesterday night, I studied until late."
  },
  {
    id: "n5_hira_vocab_19",
    type: "cloze",
    level: 5,
    subject: "あかるく",
    sentence: "まどを　あけると、　へやが　[ ]　なります。",
    questionText: "Choose the adverb in Hiragana that best completes the sentence.",
    options: ["あかるく", "おもく", "きたなく", "かるく"],
    correctAnswer: "あかるく",
    explanation: "明るい (あかるい - akarui) means 'bright'. Adjective + なる (to become) takes the adverbial form: 明るく (あかるく). おもく is heavy, きたなく is dirty, and かるく is light.",
    englishTranslation: "When you open the window, the room becomes bright."
  },
  {
    id: "n5_hira_vocab_20",
    type: "cloze",
    level: 5,
    subject: "かぜ",
    sentence: "つよい　[ ]が　ふいていますから、　さむいです。",
    questionText: "Choose the noun in Hiragana that best completes the sentence.",
    options: ["かぜ", "はな", "あめ", "とび"],
    correctAnswer: "かぜ",
    explanation: "風 (かぜ - kaze) means 'wind'. 吹く (ふく - fuku) is the verb used for wind blowing. あめ is rain, はな is flower, and とび is jump/kite.",
    englishTranslation: "Because a strong wind is blowing, it is cold."
  },
  {
    id: "n5_hira_vocab_21",
    type: "cloze",
    level: 5,
    subject: "かいます",
    sentence: "スーパーで　りんごと　バナナを　[ ]。",
    questionText: "Choose the verb in Hiragana that best completes the sentence.",
    options: ["かいます", "かきます", "あいます", "ききます"],
    correctAnswer: "かいます",
    explanation: "買う (かう - kau) means 'to buy'. 書く (かく) is to write, 会う (あう) is to meet, and 聞く (きく) is to listen.",
    englishTranslation: "I buy apples and bananas at the supermarket."
  },
  {
    id: "n5_hira_vocab_22",
    type: "cloze",
    level: 5,
    subject: "はきます",
    sentence: "あたらしくて　くろい　ズボンを　[ ]。",
    questionText: "Choose the verb in Hiragana that best completes the sentence.",
    options: ["はきます", "きます", "かぶります", "つけます"],
    correctAnswer: "はきます",
    explanation: "穿く (はきます - hakimasu) is used for wearing garments on the lower body (like trousers, skirts, socks). 着る (きます) is for upper body, かぶります is for hats, and つけます is for accessories/turning on.",
    englishTranslation: "I put on new black trousers."
  },
  {
    id: "n5_hira_vocab_23",
    type: "cloze",
    level: 5,
    subject: "おなか",
    sentence: "[ ]が　すきましたから、　なにか　たべたいです。",
    questionText: "Choose the noun in Hiragana that best completes the sentence.",
    options: ["おなか", "あたま", "こえ", "みみ"],
    correctAnswer: "おなか",
    explanation: "おなか (onaka) means 'stomach'. おなかがすく is the set phrase for 'to become hungry'. あたま is head, こえ is voice, andみみ is ear.",
    englishTranslation: "Because I am hungry, I want to eat something."
  },
  {
    id: "n5_hira_vocab_24",
    type: "cloze",
    level: 5,
    subject: "きっさてん",
    sentence: "ともだちと　[ ]で　コーヒーを　のみながら　はなしました。",
    questionText: "Choose the place in Hiragana that best completes the sentence.",
    options: ["きっさてん", "ようか", "たいしかん", "としょかん"],
    correctAnswer: "きっさてん",
    explanation: "喫茶店 (きっさてん - kissaten) means 'coffee lounge/shop'. ようか is 8th day, 大使館 (たいしかん) is embassy, and 図書館 (としょかん) is library.",
    englishTranslation: "I talked with my friend while drinking coffee at the coffee lounge."
  },
  {
    id: "n5_hira_vocab_25",
    type: "cloze",
    level: 5,
    subject: "へや",
    sentence: "わたしの　[ ]は　せまいですが　とても　きれいです。",
    questionText: "Choose the noun in Hiragana that best completes the sentence.",
    options: ["へや", "いえ", "にわ", "はこ"],
    correctAnswer: "へや",
    explanation: "部屋 (へや - heya) means 'room'. 家 (いえ) is house, 庭 (にわ) is garden, and 箱 (はこ) is box.",
    englishTranslation: "My room is narrow but very clean."
  }
];

export const stripFurigana = (text: string): string => {
  return text.replace(/\{[^}]*\}/g, "");
};

export const convertToHiraganaOnly = (text: string): string => {
  // Replace base{reading} with spaced reading
  let result = text.replace(/([^{}\s]+)\{([^}]+)\}/g, " $2 ");
  
  // Clean up bold markers
  result = result.replace(/\*\*/g, "");
  
  // Add space around Japanese punctuation
  result = result
    .replace(/、/g, "、 ")
    .replace(/。/g, "。 ")
    .replace(/？/g, "？ ")
    .replace(/！/g, "！ ");
  
  // Replace full-width and half-width spaces with standard spaces, clean up double spaces
  result = result
    .replace(/[\s　]+/g, " ")
    .trim();
    
  return result;
};

export const getReadingForSubjectInSentence = (sentence: string, subject: string): string => {
  const regex = new RegExp(`${subject}\\{([^}]+)\\}`);
  const match = regex.exec(sentence);
  if (match) {
    return match[1];
  }
  return subject; // Fallback if no furigana annotation found
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
  // --- Additional N5 templates ---
  {
    subject: "お茶",
    sentence: "冷{つめ}たい**お茶{ちゃ}**を飲{の}みましょう。",
    englishTranslation: "Let's drink some cold green tea.",
    level: 5
  },
  {
    subject: "お風呂",
    sentence: "毎日{まいにち}、温{あたた}かい**お風呂{ふろ}**に入{はい}ります。",
    englishTranslation: "I take a warm bath every day.",
    level: 5
  },
  {
    subject: "切符",
    sentence: "駅{えき}で電車{でんしゃ}の**切符{きっぷ}**を買{か}いました。",
    englishTranslation: "I bought a train ticket at the station.",
    level: 5
  },
  {
    subject: "宿題",
    sentence: "夕飯{ゆうはん}の前に今日{きょう}の**宿題{しゅくだい}**をします。",
    englishTranslation: "I do today's homework before dinner.",
    level: 5
  },
  {
    subject: "洗濯",
    sentence: "晴{は}れた日に家族{かぞく}の**洗濯{せんたく}**をします。",
    englishTranslation: "I do the family laundry on sunny days.",
    level: 5
  },
  {
    subject: "掃除",
    sentence: "土曜日に自分{じぶん}の部屋{へや}の**掃除{そうじ}**をします。",
    englishTranslation: "I clean my own room on Saturdays.",
    level: 5
  },
  {
    subject: "散歩",
    sentence: "夕方{ゆうがた}、犬と静{しず}かな公園{こうえん}を**散歩{さんぽ}**します。",
    englishTranslation: "I take a walk with my dog in the quiet park in the evening.",
    level: 5
  },
  {
    subject: "果物",
    sentence: "毎朝{まいあさ}、甘{あま}くて新鮮{しんせん}な**果物{くだもの}**を食べます。",
    englishTranslation: "I eat sweet and fresh fruit every morning.",
    level: 5
  },
  {
    subject: "野菜",
    sentence: "健康{けんこう}のために**野菜{やさい}**をたくさん食べるようにしています。",
    englishTranslation: "I try to eat a lot of vegetables for my health.",
    level: 5
  },
  {
    subject: "牛乳",
    sentence: "朝ご飯{あさごはん}の時に冷{つめ}たい**牛乳{ぎゅうにゅう}**を飲みます。",
    englishTranslation: "I drink cold milk at breakfast time.",
    level: 5
  },
  {
    subject: "食堂",
    sentence: "お昼休みには大学{だいがく}の**食堂{しょくどう}**に行きます。",
    englishTranslation: "I go to the university cafeteria during lunch break.",
    level: 5
  },
  {
    subject: "銀行",
    sentence: "お金を下ろすために駅{えき}の前{まえ}の**銀行{ぎんこう}**に行きました。",
    englishTranslation: "I went to the bank in front of the station to withdraw money.",
    level: 5
  },
  {
    subject: "病院",
    sentence: "ひどい風邪{かぜ}をひいたので朝一番に**病院{びょういん}**へ行きました。",
    englishTranslation: "I went to the hospital first thing in the morning because I caught a bad cold.",
    level: 5
  },
  {
    subject: "学校",
    sentence: "毎朝{まいあさ}八時半に**学校{がっこう}**へ向{む}かいます。",
    englishTranslation: "I head to school at 8:30 every morning.",
    level: 5
  },
  {
    subject: "教室",
    sentence: "日本語の授業{じゅぎょう}は三階の**教室{きょうしつ}**で行われます。",
    englishTranslation: "The Japanese lesson is held in the classroom on the third floor.",
    level: 5
  },
  {
    subject: "授業",
    sentence: "今日{きょう}の歴史{れきし}の**授業{じゅぎょう}**はとても面白かったです。",
    englishTranslation: "Today's history class was very interesting.",
    level: 5
  },
  {
    subject: "夏休み",
    sentence: "**夏休み{なつやすみ}**には友達と一緒{いっしょ}に沖縄の海へ行く予定です。",
    englishTranslation: "I plan to go to the sea in Okinawa with my friends during summer vacation.",
    level: 5
  },
  {
    subject: "冬休み",
    sentence: "**冬休み{ふゆやすみ}**に家族{かぞく}でスキー旅行に行きたいです。",
    englishTranslation: "I want to go on a ski trip with my family during winter vacation.",
    level: 5
  },
  {
    subject: "誕生日",
    sentence: "私の**誕生日{たんじょうび}**に友達が集{あつ}まってお祝いしてくれました。",
    englishTranslation: "My friends gathered and celebrated on my birthday.",
    level: 5
  },
  {
    subject: "英語",
    sentence: "彼は毎日ラジオで**英語{えいご}**を熱心{ねっしん}に勉強しています。",
    englishTranslation: "He is studying English eagerly on the radio every day.",
    level: 5
  },
  {
    subject: "地図",
    sentence: "スマホで近くの美味しいレストランの**地図{ちず}**を見ました。",
    englishTranslation: "I looked at the map of nearby delicious restaurants on my smartphone.",
    level: 5
  },
  {
    subject: "日記",
    sentence: "日本語の練習{れんしゅう}のために毎日**日記{にっき}**を書いています。",
    englishTranslation: "I write a diary every day to practice Japanese.",
    level: 5
  },
  {
    subject: "電話",
    sentence: "昨日、遠く{とおく}に住んでいる母に**電話{でんわ}**をかけました。",
    englishTranslation: "Yesterday, I made a phone call to my mother who lives far away.",
    level: 5
  },
  {
    subject: "切手",
    sentence: "手紙{てがみ}を出すために郵便局{ゆうびんきょく}で**切手{きって}**を買いました。",
    englishTranslation: "I bought stamps at the post office to send a letter.",
    level: 5
  },
  {
    subject: "葉書",
    sentence: "旅行先{りょこうさき}から友達に綺麗な**葉書{はがき}**を送りました。",
    englishTranslation: "I sent a beautiful postcard to my friend from my travel destination.",
    level: 5
  },
  // --- Additional N4 templates ---
  {
    subject: "安全",
    sentence: "この公園{こうえん}は夜でも明るくてとても**安全{あんぜん}**です。",
    englishTranslation: "This park is bright and very safe even at night.",
    level: 4
  },
  {
    subject: "急行",
    sentence: "私の最寄り駅{えき}には**急行{きゅうこう}**電車が止まりません。",
    englishTranslation: "The express train does not stop at my nearest station.",
    level: 4
  },
  {
    subject: "会社員",
    sentence: "大学を卒業{そつぎょう}した後、貿易会社の**会社員{かいしゃいん}**になりました。",
    englishTranslation: "After graduating from university, I became an employee at a trading company.",
    level: 4
  },
  {
    subject: "交通",
    sentence: "この都市{とし}は電車とバスの**交通{こうつう}**の便が良いです。",
    englishTranslation: "This city has good train and bus transportation services.",
    level: 4
  },
  {
    subject: "反対",
    sentence: "計画の変更{へんこう}に対して多くの人が**反対{はんたい}**しました。",
    englishTranslation: "Many people opposed the changes to the plan.",
    level: 4
  },
  {
    subject: "賛成",
    sentence: "私は彼の提案{ていあん}に心から**賛成{さんせい}**します。",
    englishTranslation: "I sincerely agree with his proposal.",
    level: 4
  },
  {
    subject: "事故",
    sentence: "昨日の夕方、駅の前{まえ}で交通事故{じこ}がありました。",
    englishTranslation: "There was a traffic accident in front of the station yesterday evening.",
    level: 4
  },
  {
    subject: "注意",
    sentence: "暗い道を歩く時は足元に十分に**注意{ちゅうい}**してください。",
    englishTranslation: "Please pay close attention to your feet when walking on a dark road.",
    level: 4
  },
  {
    subject: "相談",
    sentence: "将来の仕事{しごと}について親や先生に**相談{そうだん}**しました。",
    englishTranslation: "I consulted with my parents and teachers about my future career.",
    level: 4
  },
  {
    subject: "連絡",
    sentence: "もし遅刻{ちこく}しそうな時は、事前に**連絡{れんらく}**をください。",
    englishTranslation: "Please contact us in advance if you are likely to be late.",
    level: 4
  },
  {
    subject: "生活",
    sentence: "一人暮らしを始めてから、規則正しい**生活{せいかつ}**を心がけています。",
    englishTranslation: "Since I started living alone, I try to lead a regular life.",
    level: 4
  },
  {
    subject: "都合",
    sentence: "申し訳ありませんが、来週の木曜日は少し**都合{つごう}**が悪いです。",
    englishTranslation: "I am sorry, but next Thursday is a bit inconvenient.",
    level: 4
  },
  {
    subject: "約束",
    sentence: "週末に図書館で一緒に勉強する**約束{やくそく}**をしました。",
    englishTranslation: "We promised to study together at the library over the weekend.",
    level: 4
  },
  {
    subject: "発表",
    sentence: "来週の月曜日に、大学のゼミで研究の結果を**発表{はっぴょう}**します。",
    englishTranslation: "Next Monday, I will present my research results in the university seminar.",
    level: 4
  },
  {
    subject: "案内",
    sentence: "新しく日本に来た留学生に東京の観光地を**案内{あんない}**しました。",
    englishTranslation: "I guided the newly arrived international student around Tokyo's tourist spots.",
    level: 4
  },
  {
    subject: "用事",
    sentence: "今日は少し**用事{ようじ}**があるので、お先に失礼します。",
    englishTranslation: "I will excuse myself now because I have some errands to run today.",
    level: 4
  },
  {
    subject: "趣味",
    sentence: "私の**趣味{しゅみ}**は世界各地のカメラを集めることです。",
    englishTranslation: "My hobby is collecting cameras from all over the world.",
    level: 4
  },
  {
    subject: "理由",
    sentence: "会社を辞{や}める決断{けつだん}をした**理由{りゆう}**を話しました。",
    englishTranslation: "I spoke about the reason why I made the decision to quit the company.",
    level: 4
  },
  {
    subject: "将来",
    sentence: "私の**将来{しょうらい}**の夢は、海外で日本語を教えることです。",
    englishTranslation: "My future dream is to teach Japanese abroad.",
    level: 4
  },
  {
    subject: "興味",
    sentence: "私は日本の伝統的{でんとうてき}な文化にとても**興味{きょうみ}**があります。",
    englishTranslation: "I have a strong interest in traditional Japanese culture.",
    level: 4
  },
  {
    subject: "意見",
    sentence: "他人の意見を聞くだけでなく、自分の**意見{いけん}**も発信すべきです。",
    englishTranslation: "You should not only listen to other people's opinions but also express your own.",
    level: 4
  },
  // --- Additional N3 templates ---
  {
    subject: "決定",
    sentence: "来期のリーダーを誰にするか、会議でついに**決定{けってい}**しました。",
    englishTranslation: "At the meeting, we finally decided who would be the leader for the next term.",
    level: 3
  },
  {
    subject: "理解",
    sentence: "何度も説明を読んで、ようやくこの文法のルールを**理解{りかい}**しました。",
    englishTranslation: "After reading the explanation many times, I finally understood this grammar rule.",
    level: 3
  },
  {
    subject: "変化",
    sentence: "季節の**変化{へんか}**に合わせて、部屋の模様替えをしました。",
    englishTranslation: "I rearranged the room layout according to the changes of the seasons.",
    level: 3
  },
  {
    subject: "成長",
    sentence: "この植物{しょくぶつ}は毎日水を与えることで、急速に**成長{せいちょう}**します。",
    englishTranslation: "This plant grows rapidly by giving it water every day.",
    level: 3
  },
  {
    subject: "複雑",
    sentence: "この数学の問題は非常に**複雑{ふくざつ}**で、解くのに時間がかかります。",
    englishTranslation: "This mathematics problem is very complex, taking time to solve.",
    level: 3
  },
  {
    subject: "簡単",
    sentence: "初心者のために、できるだけ**簡単{かんたん}**な表現を使って話しました。",
    englishTranslation: "For beginners, I spoke using expressions that are as simple as possible.",
    level: 3
  },
  {
    subject: "集中",
    sentence: "静かな環境で作業すると、仕事にしっかりと**集中{しゅうちゅう}**できます。",
    englishTranslation: "Working in a quiet environment allows me to concentrate fully on my job.",
    level: 3
  },
  {
    subject: "緊張",
    sentence: "たくさんの人の前でスピーチをするのは、とても**緊張{きんちょう}**します。",
    englishTranslation: "Giving a speech in front of many people makes me very nervous.",
    level: 3
  },
  {
    subject: "感謝",
    sentence: "困っている時に助けてくれた親友に、心から**感謝{かんしゃ}**しています。",
    englishTranslation: "I sincerely thank my close friend who helped me when I was in trouble.",
    level: 3
  },
  {
    subject: "応援",
    sentence: "スタジアムに行って、地元のプロチームを一生懸命に**応援{おうえん}**しました。",
    englishTranslation: "I went to the stadium and cheered hard for my local professional team.",
    level: 3
  },
  {
    subject: "想像",
    sentence: "百年後の未来の乗り物がどうなっているか、**想像{そうぞう}**してみてください。",
    englishTranslation: "Please try to imagine what vehicles will be like a hundred years in the future.",
    level: 3
  },
  {
    subject: "判断",
    sentence: "他人の意見に流されず、事実に基づいて自分で**判断{はんだん}**してください。",
    englishTranslation: "Do not be swayed by others' opinions; judge for yourself based on facts.",
    level: 3
  },
  {
    subject: "比較",
    sentence: "いくつかの旅行プランを**比較{ひかく}**して、一番お得なものを選びました。",
    englishTranslation: "I compared several travel plans and selected the most economical one.",
    level: 3
  },
  {
    subject: "共通",
    sentence: "彼と私には、海外旅行が好きだという**共通{きょうつう}**の趣味があります。",
    englishTranslation: "He and I have a common hobby of liking traveling abroad.",
    level: 3
  },
  {
    subject: "科学",
    sentence: "AIの開発により、現代の**科学{かがく}**技術は新しい時代を迎えました。",
    englishTranslation: "Modern science and technology has entered a new era due to the development of AI.",
    level: 3
  },
  {
    subject: "効果",
    sentence: "このトレーニングを続けると、ダイエットに高い**効果{こうか}**が現れます。",
    englishTranslation: "Continuing this training will show a high effect on weight loss.",
    level: 3
  },
  {
    subject: "期待",
    sentence: "多くのファンが、彼の新しいアルバムの発売を強く**期待{きたい}**しています。",
    englishTranslation: "Many fans highly expect the release of his new album.",
    level: 3
  },
  {
    subject: "目標",
    sentence: "JLPT試験に合格することを**目標{もくひょう}**にして、毎日勉強しています。",
    englishTranslation: "I study every day with the goal of passing the JLPT exam.",
    level: 3
  },
  {
    subject: "選択",
    sentence: "自分の信じる道を進むか、安定を選ぶか、重大な**選択{せんたく}**を迫られました。",
    englishTranslation: "I was forced to make a major choice between going down the path I believe in or choosing stability.",
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

export const generateQuestions = (): Question[] => {
  const generated: Question[] = [];
  const processedVocab = new Set<string>();

  KANJI_DATASET.forEach((k) => {
    const level = k.jlpt as 5 | 4 | 3;
    const kanji = k.kanji;
    const meanings = k.meanings;
    const onyomi = k.onyomi;
    const kunyomi = k.kunyomi;
    const strokeCount = k.strokeCount;

    // --- 1. Kanji Character Questions (1 variant of each type) ---

    // A. Meanings (1 variant)
    for (let i = 0; i < 1; i++) {
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

    // B. Reverse Meanings (1 variant)
    for (let i = 0; i < 1; i++) {
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

    // C. Onyomi Readings (1 variant) & Reverse Onyomi (1 variant)
    if (onyomi.length > 0) {
      const correctOnyomi = onyomi[0];
      for (let i = 0; i < 1; i++) {
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

      for (let i = 0; i < 1; i++) {
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
    }

    // D. Kunyomi Readings (1 variant) & Reverse Kunyomi (1 variant)
    if (kunyomi.length > 0) {
      const correctKunyomi = cleanReading(kunyomi[0]);
      for (let i = 0; i < 1; i++) {
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

      for (let i = 0; i < 1; i++) {
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
    }

    // E. Stroke Count (1 variant) & Reverse Stroke Count (1 variant)
    for (let i = 0; i < 1; i++) {
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

    for (let i = 0; i < 1; i++) {
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

    // F. Vocab Example Associations (1 variant per type)
    k.examples.forEach((ex, idx) => {
      if (idx >= 3) return; // limit to first 3 examples

      for (let i = 0; i < 1; i++) {
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

      for (let i = 0; i < 1; i++) {
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

      for (let i = 0; i < 1; i++) {
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

    // D. N5 Hiragana-only Cloze Question (mimicking real N5 exam style)
    if (level === 5) {
      const hiraSubject = getReadingForSubjectInSentence(temp.sentence, subject);
      // Generate spaced Hiragana version of the sentence, but keep the [ ] blank intact
      const spacedHiraSentence = convertToHiraganaOnly(clozeJp);
      
      // Get distractors in Hiragana
      const hiraClozeDist = clozeDist.map(dist => {
        const foundTemplate = SENTENCE_TEMPLATES.find(t => t.subject === dist);
        return getReadingForSubjectInSentence(foundTemplate ? foundTemplate.sentence : "", dist);
      });

      generated.push({
        id: `g_s_hira_cloze_${index}_${subject}`,
        type: "cloze",
        level: 5,
        subject,
        sentence: spacedHiraSentence,
        questionText: "Choose the word in Hiragana that best completes the sentence.",
        options: shuffle([hiraSubject, ...hiraClozeDist]),
        correctAnswer: hiraSubject,
        explanation: `The sentence in Hiragana is: "${convertToHiraganaOnly(temp.sentence)}" (meaning: "${temp.englishTranslation}"). The correct word is 【${hiraSubject}】.`,
        englishTranslation: temp.englishTranslation
      });
    }
  });

  // --- 4. Vocabulary questions from vocab JSON lists (N5, N4, N3) for words not already processed ---
  const allVocabWordsList = [
    ...allVocabWords,
    ...n5Vocab.words.map(w => w.word),
    ...n4Vocab.words.map(w => w.word),
    ...n3Vocab.words.map(w => w.word),
  ];
  const allVocabReadingsList = [
    ...allVocabReadings,
    ...n5Vocab.words.map(w => w.furigana || w.word),
    ...n4Vocab.words.map(w => w.furigana || w.word),
    ...n3Vocab.words.map(w => w.furigana || w.word),
  ];
  const allVocabMeaningsList = [
    ...allVocabMeanings,
    ...n5Vocab.words.map(w => w.meaning),
    ...n4Vocab.words.map(w => w.meaning),
    ...n3Vocab.words.map(w => w.meaning),
  ];

  const allVocabs = [
    ...n5Vocab.words,
    ...n4Vocab.words,
    ...n3Vocab.words
  ];

  allVocabs.forEach((vocabItem) => {
    const vocabWord = vocabItem.word;
    const vocabReading = vocabItem.furigana || vocabItem.word;
    const vocabMeaning = vocabItem.meaning;
    const level = vocabItem.level as 5 | 4 | 3;

    if (processedVocab.has(vocabWord)) return;
    processedVocab.add(vocabWord);

    // Only generate Kanji Select and Reading if the word actually has Kanji
    const hasKanji = vocabWord !== vocabReading && !!vocabWord.match(/[\u4e00-\u9faf]/);

    if (hasKanji) {
      // A. Reading
      const readDist = getDistractors(allVocabReadingsList, vocabReading, 3);
      generated.push({
        id: `g_v_json_read_${vocabWord}`,
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

      // B. Kanji Select
      const wordDist = getDistractors(allVocabWordsList, vocabWord, 3);
      generated.push({
        id: `g_v_json_kanji_${vocabWord}`,
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
    }

    // C. Meaning (Always generate this)
    const meanDist = getDistractors(allVocabMeaningsList, vocabMeaning, 3);
    generated.push({
      id: `g_v_json_mean_${vocabWord}`,
      type: "meaning",
      level,
      subject: vocabWord,
      sentence: hasKanji ? `単語: 【${vocabWord}】 (${vocabReading})` : `単語: 【${vocabWord}】`,
      questionText: `What does the word 【${vocabWord}】 mean?`,
      options: shuffle([vocabMeaning, ...meanDist]),
      correctAnswer: vocabMeaning,
      explanation: `【${vocabWord}】 means '${vocabMeaning}'.`,
      englishTranslation: `Meaning of 【${vocabWord}】`
    });
  });

  return generated;
};

export const PRACTICE_QUESTIONS: Question[] = [
  ...MANUAL_QUESTIONS,
  ...generateQuestions()
];
