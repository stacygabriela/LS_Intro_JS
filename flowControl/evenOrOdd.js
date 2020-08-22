function evenOrOdd(num) {
  if (!Number.isInteger(num)){
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd')
  }
}

evenOrOdd(5);
evenOrOdd('two');

//refactor this statement to us an if statement instead:
// return foo() ? 'bar' : qux();

/* if (foo()) {
  return 'bar':
} else {
  return qux();
} */

function isArrayEmpty(arr){
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty')
  }
}

isArrayEmpty([]);
