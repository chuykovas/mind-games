#!/usr/bin/env node
import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let i = 1;
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

while (i <= 3) {
  const randomNumber = randomInteger(1, 1000);
  console.log(`Question: ${randomNumber}`);

  const answer = readlineSync.question('Your answer:');

  if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${answer === 'yes' ? 'no' : 'yes'}. \nLet's try again, ${name}!`);
    break;
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  i += 1;
}
