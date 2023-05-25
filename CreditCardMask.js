function maskify(input) {
  let reuslt = "";
  for (let i = 0; i < input.length; i++) {
    if (i >= input.length - 4) {
      reuslt += input[i];
    } else {
      reuslt += "#";
    }
  }
  return reuslt;
}
