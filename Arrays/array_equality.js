//How do you check whether two arrays have the same elements?
//One option is to create a function that compares the elements of one array
// with the corresponding elements in the other:

arr = [1, 2, 3]
function arraysEqual(arr1,arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));
