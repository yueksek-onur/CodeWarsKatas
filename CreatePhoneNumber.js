function createPhoneNumber(numbers) {
  let result = "(";

  for (let i = 0; i < numbers.length; i++) {
    if (i === 3) {
      result = result + ") ";
    } else if (i === 6) {
      result = result + "-";
    }
    result = result + numbers[i];
  }
  return result;
}
