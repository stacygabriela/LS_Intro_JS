function multiply(left, right){
  return left * right;
}

function getNum(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNum('Enter the first number: ');
let right = getNum('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
