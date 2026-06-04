import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateQuestions, MANUAL_QUESTIONS } from '../src/data/questions-source.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Compiling Practice Arena questions...");

// 1. Generate questions
const questions = [
  ...MANUAL_QUESTIONS,
  ...generateQuestions()
];

console.log(`Generated ${questions.length} total questions.`);

// 2. Write to src/data/questions.json
const destPath = path.join(__dirname, '../src/data/questions.json');
fs.writeFileSync(destPath, JSON.stringify(questions, null, 2), 'utf8');

console.log(`Successfully compiled and saved all questions to ${destPath}`);
