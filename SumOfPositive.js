function positiveSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    element > 0 ? (sum += element) : element;
  });
  return sum;
}
