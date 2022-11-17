import randomInteger from '../src/util.js';
import { startGame } from '../src/index.js';

const brainPrime = () => {
  const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getPrimeNumber = () => {
    const randomNumber = randomInteger(1, 100);
    let isPrime = 'yes';

    // eslint-disable-next-line no-plusplus
    for (let i = 2; i <= randomNumber / 2; i++) {
      if (randomNumber % i === 0) {
        isPrime = 'no';
      }
    }

    return [randomNumber, isPrime];
  };

  startGame(questionGame, getPrimeNumber);
};

export default brainPrime;
