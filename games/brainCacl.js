import randomInteger from '../src/util.js';
import { startGame } from '../src/index.js';

const brainCalc = () => {
  const questionGame = 'What is the result of the expression?';
  const calculate = () => {
    const operandsList = ['+', '-', '*'];

    const firstTerm = randomInteger(1, 100);
    const secondTerm = randomInteger(1, 100);
    const operand = operandsList[randomInteger(0, 2)];
    let result = 0;
    const question = firstTerm + operand + secondTerm;

    switch (operand) {
      case '+':
        result = firstTerm + secondTerm;
        break;
      case '-':
        result = firstTerm - secondTerm;
        break;
      case '*':
        result = firstTerm * secondTerm;
        break;
      default:
        break;
    }

    return [question, String(result)];
  };

  startGame(questionGame, calculate);
};

export default brainCalc;
