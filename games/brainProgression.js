import randomInteger from '../src/util.js';
import { startGame } from '../src/index.js';

const brainProgression = () => {
  const questionGame = 'What number is missing in the progression?';
  const getProgression = () => {
    let firstElementOfProgression = randomInteger(1, 10);
    const difference = randomInteger(1, 10);
    const progressionLength = randomInteger(5, 10);
    const progression = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < progressionLength; i++) {
      progression.push(firstElementOfProgression);
      firstElementOfProgression += difference;
    }

    const positionUnknowNumber = randomInteger(0, progressionLength - 1);
    const result = progression[positionUnknowNumber];
    const question = progression.map((item, index) => (index === positionUnknowNumber ? '..' : item));

    return [question.join(' '), String(result)];
  };

  startGame(questionGame, getProgression);
};

export default brainProgression;
