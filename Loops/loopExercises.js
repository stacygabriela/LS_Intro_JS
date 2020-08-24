/*Write a function that computes and returns the factorial 
(see exercise 4 in the Functions chapter) of a number by using a for loop. 
You may assume that the argument is a valid non-negative integer. */

function factorial(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));

// Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10.
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1,6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2')