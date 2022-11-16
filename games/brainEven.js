import randomInteger from '../src/util.js';
import { startGame } from '../src/index.js';

const brainEven = () => {
  const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const determineEven = () => {
    const randomNumber = randomInteger(1, 1000);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    return [randomNumber, rightAnswer];
  };

  startGame(questionGame, determineEven);
};

export default brainEven;
