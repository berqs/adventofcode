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
