let rlSync = require('readline-sync');

let name = rlSync.question("What's your name?\n");

let number1 = Number(rlSync.question('Enter your age\n'));
let number2 = 10
let backInTimeAge = number1 - number2

console.log(`If we traveled back in time 10 years, ${name} would be ${backInTimeAge}`);
