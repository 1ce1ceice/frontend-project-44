import readlineSync from 'readline-sync';

export const displayGreeting = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const roundsCount = 3;

export const startGameProcess = ({ gameQuestions, correctGameAnswers, gameRules }) => {
  displayGreeting();

  const userName = getUserName();

  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const question = gameQuestions[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = correctGameAnswers[i];
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
