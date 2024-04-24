import readlineSync from 'readline-sync';

let GameOver;
let userName;
let CorrectAnswer;
let firstRandomNumber;
let secondRandomNumber;
let sign;

const greetings = () => {
  userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

function getUsersName() {
  return userName;
}

const rulesOfGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    default:
  }
};

function getRandom(min, max) {
  const minCopy = Math.ceil(min);
  const maxCopy = Math.floor(max);
  return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
}

const getRandomMathSign = () => {
  const arr = ['+', '-', '*'];
  const i = Math.floor(Math.random() * arr.length);
  const operator = arr[i];
  return operator;
};

const question = (nameGame) => {
  firstRandomNumber = getRandom(2, 100);
  secondRandomNumber = getRandom(1, 100);
  sign = getRandomMathSign();
  let questionResult;
  switch (nameGame) {
    case 'brain-even':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber}`);
      break;
    case 'brain-calc':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber} ${sign} ${secondRandomNumber}`);
      break;
    case 'brain-gcd':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber} ${secondRandomNumber}`);
      break;
    default:
      console.log('Sorry, something wrong');
      break;
  }
  return questionResult;
};

const getUsersAnswer = () => readlineSync.question('Your answer: ');

const brainEvenCorrectAnswer = (a) => {
  if (a % 2 === 0) {
    CorrectAnswer = 'yes';
  } else if (a % 2 !== 0) {
    CorrectAnswer = 'no';
  }
  return CorrectAnswer;
};
const brainCalcCorrectAnswer = (a, b) => {
  if (sign === '+') {
    CorrectAnswer = a + b;
  } else if (sign === '-') {
    CorrectAnswer = a - b;
  } else {
    CorrectAnswer = a * b;
  }
  return CorrectAnswer;
};

const brainGcdCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }
  return brainGcdCorrectAnswer(b, a % b);
};

const correctAnswer = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      brainEvenCorrectAnswer(firstRandomNumber);
      break;
    case 'brain-calc':
      brainCalcCorrectAnswer(firstRandomNumber, secondRandomNumber);
      break;
    case 'brain-gcd':
      CorrectAnswer = brainGcdCorrectAnswer(firstRandomNumber, secondRandomNumber);
      break;
    default:
      console.log('Sorry, something wrong');
      break;
  }
  return CorrectAnswer.toString();
};

const textOfcorrectAnswer = () => {
  console.log('Correct!');
};

const compareOfAnswer = (nameGame) => {
  const userAnswer = getUsersAnswer();
  const answer = correctAnswer(nameGame);
  if (answer === userAnswer) {
    textOfcorrectAnswer();
  } else {
    console.log(`${userAnswer} ${'is wrong answer ;(. Correct answer was'} ${answer}.\n${"Let's try again,"} ${getUsersName()}!`);
    GameOver = 'true';
  }
};

const runGameWithCounter = (nameGame) => {
  greetings();
  rulesOfGame(nameGame);
  const count = 3;
  let i = 0;
  while (i < count && GameOver !== 'true') {
    question(nameGame);
    correctAnswer(nameGame);
    compareOfAnswer(nameGame);
    i += 1;
  }
  if (i === 3 && GameOver !== 'true') {
    console.log(`${'Congratulations,'} ${getUsersName()}!`);
  }
};

export default runGameWithCounter;
