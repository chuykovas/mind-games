import randomInteger from '../src/util.js';
import { startGame } from '../src/index.js';

const brainGcd = () => {
  const questionGame = 'Find the greatest common divisor of given numbers.';

  const simpleGcd = (firstNumber, secondNumber) => {
    if (firstNumber === secondNumber) {
      return firstNumber;
    }

    if (firstNumber === 0) {
      return secondNumber;
    }

    if (secondNumber === 0) {
      return firstNumber;
    }

    return false;
  };

  const getGcd = () => {
    let firstNumber = randomInteger(1, 1000);
    let secondNumber = randomInteger(1, 1000);
    let gcd = simpleGcd(firstNumber, secondNumber);
    const question = `${firstNumber} ${secondNumber}`;

    if (gcd) {
      return [question, String(gcd)];
    }
    while (firstNumber !== secondNumber) {
      if (firstNumber > secondNumber) {
        firstNumber -= secondNumber;
      } else {
        secondNumber -= firstNumber;
      }
    }

    gcd = firstNumber;

    return [question, String(gcd)];
  };

  startGame(questionGame, getGcd);
};

export default brainGcd;
