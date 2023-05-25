function evenNumbers(array, number) {
  const result = [];

  array.reverse().forEach((element) => {
    if (element % 2 === 0) {
      result.push(element);
    }
  });
  return result.reverse().slice(result.length - number, result.length);
}
