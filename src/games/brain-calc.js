import { startGameProcess, roundsCount } from '../utils.js';

const getRandomNumber = (param) => Math.floor(Math.random() * param);

export const askQuestion = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'What is the result of the expression?';

  // const userAnswer =
  // parseInt(readlineSync.question(`Question: ${expression}\nYour answer:`), 10);
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(operators.length)];
    const expression = `${num1} ${operator} ${num2}`;
    gameQuestions.push(expression);
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(expression);
    correctGameAnswers.push(String(correctAnswer));
  }
  return { gameQuestions, correctGameAnswers, gameRules };
};

const startCalcGame = () => {
  const gameQuestionsAndAnswers = askQuestion();
  startGameProcess(gameQuestionsAndAnswers);
};

export default startCalcGame;
