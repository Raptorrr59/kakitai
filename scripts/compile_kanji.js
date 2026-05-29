import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to convert Hiragana to Katakana for Onyomi readings
function hiraganaToKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

function compile() {
  console.log("Loading datasets...");
  const rawKanji = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/kanji-raw.json'), 'utf8'));
  const n5Vocab = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/n5-vocab.json'), 'utf8'));
  const n4Vocab = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/n4-vocab.json'), 'utf8'));
  const n3Vocab = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/n3-vocab.json'), 'utf8'));

  // Flatten vocabularies
  const allVocab = [
    ...n5Vocab.words,
    ...n4Vocab.words,
    ...n3Vocab.words
  ];

  console.log(`Total raw Kanji: ${Object.keys(rawKanji).length}`);
  console.log(`Total vocabulary items: ${allVocab.length}`);

  const compiledKanji = [];

  for (const [char, details] of Object.entries(rawKanji)) {
    const level = details.jlpt_new;
    
    // Only include JLPT N5 (5), N4 (4), and N3 (3)
    if (level === 5 || level === 4 || level === 3) {
      // Find matching vocabulary words containing this Kanji
      const matchingVocab = allVocab.filter(v => v.word && v.word.includes(char));

      // Remove duplicate words
      const uniqueVocabMap = {};
      matchingVocab.forEach(v => {
        if (!uniqueVocabMap[v.word]) {
          uniqueVocabMap[v.word] = v;
        }
      });

      const uniqueVocab = Object.values(uniqueVocabMap);

      // Sort vocabulary: prioritize level closeness
      uniqueVocab.sort((a, b) => {
        const aDiff = Math.abs(a.level - level);
        const bDiff = Math.abs(b.level - level);
        return aDiff - bDiff;
      });

      // Slice to top 4 examples
      const examples = uniqueVocab.slice(0, 4).map(v => ({
        word: v.word,
        reading: v.furigana || v.word,
        meaning: v.meaning
      }));

      compiledKanji.push({
        kanji: char,
        jlpt: level,
        strokeCount: details.strokes || 1,
        meanings: details.meanings.map(m => m.toLowerCase()),
        onyomi: (details.readings_on || []).map(hiraganaToKatakana),
        kunyomi: details.readings_kun || [],
        examples: examples
      });
    }
  }

  // Sort Kanji by JLPT level descending (N5 to N3) and stroke count
  compiledKanji.sort((a, b) => {
    if (a.jlpt !== b.jlpt) {
      return b.jlpt - a.jlpt; // level 5 first, then 4, then 3
    }
    return a.strokeCount - b.strokeCount;
  });

  console.log(`Compiled Kanji total: ${compiledKanji.length}`);
  const n5Count = compiledKanji.filter(k => k.jlpt === 5).length;
  const n4Count = compiledKanji.filter(k => k.jlpt === 4).length;
  const n3Count = compiledKanji.filter(k => k.jlpt === 3).length;
  console.log(`JLPT N5 count: ${n5Count}`);
  console.log(`JLPT N4 count: ${n4Count}`);
  console.log(`JLPT N3 count: ${n3Count}`);

  // Generate TypeScript code
  const outputCode = `export interface VocabularyExample {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiItem {
  kanji: string;
  jlpt: 5 | 4 | 3 | 2 | 1;
  strokeCount: number;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  examples: VocabularyExample[];
}

export const KANJI_DATASET: KanjiItem[] = ${JSON.stringify(compiledKanji, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '../src/data/kanji.ts'), outputCode, 'utf8');
  console.log("Database successfully generated at src/data/kanji.ts!");
}

compile();
