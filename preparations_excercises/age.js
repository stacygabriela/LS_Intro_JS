let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let future = 10; age <= 50; age += 10){
  console.log(`In ${future} tears, you will be ${age + future} years old.`);
}