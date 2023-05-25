function descendingOrder(input) {
  let digits = ("" + input).split("");
  let result = "";
  console.log(digits.sort().reverse());

  digits.forEach((element) => {
    result += element;
  });
  return Number(result);
}
