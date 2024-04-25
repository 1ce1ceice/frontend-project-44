import { startGameProcess, roundsCount } from '../utils.js';

const getRandomNumber = (param) => Math.floor(Math.random() * param);

const askQuestion = () => {
  const gameQuestions = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctGameAnswers = [];

  const isEven = (number) => (number % 2 === 0);

  // const userAnswer
  // = readlineSync.question(`Question: ${expression}\nYour answer: `).toLowerCase();
  for (let i = 0; i < roundsCount; i += 1) {
    const expression = getRandomNumber(10);
    const correctAnswer = isEven(expression) ? 'yes' : 'no';

    gameQuestions.push(expression);
    correctGameAnswers.push(correctAnswer);
  }
  return { gameQuestions, correctGameAnswers, gameRules };
};

const startEvenGame = () => {
  const gameQuestionsAndAnswers = askQuestion();
  startGameProcess(gameQuestionsAndAnswers);
};

export default startEvenGame;
