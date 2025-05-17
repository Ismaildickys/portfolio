const randomNumber = Math.random();
// console.log(randomNumber);
let result;
const guess = 'Heads';

/*if (randomNumber < 0.5) {
    result = 'Heads';
} else {
    result = 'Tails';
}
console.log(result);

if (guess === result) {
    console.log('You Win');
} else {
    console.log('You Lose');
}
*/

/* Using Ternary Operator To Simplified The if Statement */

randomNumber < 0.5 ? result = 'Heads' : result = 'Tails';
console.log(result);

guess === result ? console.log('You Win') : console.log('You Lose');
