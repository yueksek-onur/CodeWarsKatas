function accum(input) {
  let Inputstack = input.split("");
  let multiplier = 0;
  let result = "";
  Inputstack.forEach((element) => {
    result += element.toUpperCase() + "-";
    if (multiplier >= 0) {
      result = result.substring(0, result.length - 1);
      result += element.toLowerCase().repeat(multiplier) + "-";
    }
    multiplier++;
  });

  return result.substring(0, result.length - 1);
}
