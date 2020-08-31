//alt version:
// let person = {name: 'Jane', age: 37, hobbies: ['photography','genealogy'] }

let person = {
  name: 'Jane',
  age: 27,
  height: '5 ft'
};

//Use object literal syntax (e.g., { key: value, ... } notation) to create an object 
//that behaves as an array in a for statement

let personKeys = Object.keys(person);

personKeys.forEach(key => console.log(person[key]));

let myArray = {
 0: 'a',
 1: 'b',
 2: 'c',
 legnth: 3,
};

for (let i = 0; i < myArray.lenght; i += 1){
  console.log(myArray[i]);
}

//Create an array from the keys below, with all of the keys converted to upper case

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj).map((key => key.toUpperCase()));
console.log(objKeys);
console.log(obj);

//create a new object / prototype

let myObj = Object.create(myProtoObj);
let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj.qux = 3;
