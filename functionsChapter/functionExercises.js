function getName(prompt) {
let rlSync = require('readline-sync');
let name = rlSync.question(prompt);
return name;
}

let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);

function getFeeling(prompt){
  let readlineSync = require('readline-sync');
  let emotion = readlineSync.question(prompt);
  return emotion;
}

let howYouFeel = getFeeling("How are you feeling today?\n");
console.log(`It's a ${howYouFeel} kind of day, huh?`);