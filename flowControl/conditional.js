/* let a = prompt('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
} */

function allCaps(phrase){
  if (phrase.length > 10) {
    return phrase.toUpperCase();
  } else {
    return phrase;
  }
}

console.log(allCaps("sometimes I like to yell"));
console.log(allCaps('not a lot'));

//alternative solution
/* function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}