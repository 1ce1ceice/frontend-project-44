import { startGameProcess, roundsCount } from '../utils.js';

const getRandomNumber = (param) => Math.floor(Math.random() * param);

// recursive
const resultGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return resultGcd(b, a % b);
};

const askQuestion = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(20);
    const expression = `${num1} ${num2}`;
    gameQuestions.push(expression);

    const correctAnswer = resultGcd(num1, num2);
    correctGameAnswers.push(String(correctAnswer));
  }
  return { gameQuestions, correctGameAnswers, gameRules };
  // const userAnswer =
  // parseInt(readlineSync.question(`Question: ${expression}\nYour answer:`), 10);
};

const startGcdGame = () => {
  const gameQuestionsAndAnswers = askQuestion();
  startGameProcess(gameQuestionsAndAnswers);
};

export default startGcdGame;
