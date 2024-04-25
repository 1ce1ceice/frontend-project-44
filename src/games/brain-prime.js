import { startGameProcess, roundsCount } from '../utils.js';

const getRandomNumber = (param) => Math.floor(Math.random() * param);

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const askQuestion = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < roundsCount; i += 1) {
    const expression = getRandomNumber(100);
    gameQuestions.push(expression);

    const correctAnswer = isPrime(expression) ? 'yes' : 'no';
    correctGameAnswers.push(correctAnswer);
  }
  return { gameQuestions, correctGameAnswers, gameRules };
  // const userAnswer =
  // readlineSync.question(`Question: ${expression}\nYour answer: `).toLowerCase();
};

const startPrimeGame = () => {
  const gameQuestionsAndAnswers = askQuestion();
  startGameProcess(gameQuestionsAndAnswers);
};

export default startPrimeGame;
