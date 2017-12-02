//Part 1
function checkNumbers(numbers) {
  numbers = numbers + numbers[0];
  var numLenght = numbers.length;
  var result = 0;

  for (i = 0; i < numLenght; i++) {
    if (numbers[i] == numbers[i + 1]) {
      result += (+numbers[i]);
    }
  }
  return result;
}


//Part 2
function checkNumbers2(numbers) {
  var numLenght = numbers.length;
  var numbersby2 = numLenght/2;
  numbers = numbers + numbers.substring(0, numbersby2);
  var result = 0;

  for (i = 0; i < numLenght; i++){
    if (numbers[i] == numbers[i+numbersby2]){
      result += (+numbers[i]);
    }
  }
  return result;
}
