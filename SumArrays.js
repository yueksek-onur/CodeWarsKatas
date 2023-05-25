function sum(numbers) {
  let result = 0;

  if (numbers.length === 0) {
    return result;
  }

  numbers.forEach((element) => {
    result += element;
  });

  return result;
}
