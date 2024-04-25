import { startGameProcess, roundsCount } from '../utils.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const aggregateProgression = () => {
  let num1 = getRandomNumber(2, 10);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 20);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(num1);
    num1 += step;
  }
  // const expression = progression.join(' ');
  // const userAnswer =
  // parseInt(readlineSync.question(`Question: ${expression}\nYour answer:`), 10);
  return progression;
};

const askQuestion = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'What number is missing in the progression?';

  for (let i = 0; i < roundsCount; i += 1) {
    const progression = aggregateProgression();

    const max = progression.length - 1;
    const hiddenPosition = getRandomNumber(0, max);

    const correctAnswer = progression[hiddenPosition];
    correctGameAnswers.push(String(correctAnswer));

    progression[hiddenPosition] = '..';
    const expression = progression.toString().replace(/,/g, ' ');
    gameQuestions.push(expression);
  }
  return { gameQuestions, correctGameAnswers, gameRules };
};

const startProgressionGame = () => {
  const gameQuestionsAndAnswers = askQuestion();
  startGameProcess(gameQuestionsAndAnswers);
};

export default startProgressionGame;
