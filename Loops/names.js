/*let names = ['Stacy' ,'Kel' , 'Bambi'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
} */

//for (let index = 0; index < names.length; index += 1){
//  let upperCaseName = names[index].toUpperCase();
//  upperNames.push(upperCaseName);
//}

//console.log(upperNames);

/* var text = '';
var i = 0;
do {
  text += 'The number is ' + i;
  i++;
}
while (i < 5); */

// continue control

let names = ['Chris' , 'Kevin' , 'Naveed' , 'Pete' , 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1){
  if (names[index] === 'Naveed'){
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
upperNames.push(upperCaseName);
}

console.log(upperNames);