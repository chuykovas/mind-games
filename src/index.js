import readlineSync from 'readline-sync';

const sayGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const startGame = (questionGame, gameFunction) => {
  let i = 1;
  const playerName = sayGreeting();
  console.log(questionGame);

  while (i <= 3) {
    const [question, result] = gameFunction();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');

    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${playerName}!`);
      break;
    }

    if (i === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }

    i += 1;
  }
};

export { sayGreeting, startGame };
