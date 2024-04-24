import readlineSync from 'readline-sync';

let GameOver;
let userName;
let CorrectAnswer;
let firstRandomNumber;

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
    default:
  }
};

function getRandom(min, max) {
  const minCopy = Math.ceil(min);
  const maxCopy = Math.floor(max);
  return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
}

const question = (nameGame) => {
  firstRandomNumber = getRandom(2, 100);
  let questionResult;
  switch (nameGame) {
    case 'brain-even':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber}`);
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

const correctAnswer = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      brainEvenCorrectAnswer(firstRandomNumber);
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
