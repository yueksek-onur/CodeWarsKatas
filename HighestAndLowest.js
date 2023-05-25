function highAndLow(input) {
  let digits = input
    .split(" ")
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  return digits[0] + " " + digits[digits.length - 1];
}
