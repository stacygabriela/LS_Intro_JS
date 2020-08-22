function times(number1, number2){
  let result = number1 * number2;
  console.log(result);
  return result;
}

times (1,1);
times (1,2);
times (2,3);
times (6,4);
times (24, 5);

times(times(times(times(times(times(1,1),2),3),4),5);