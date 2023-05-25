function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  let result = "";

  if (bmi <= 18.5) {
    result = "Underweight";
  } else if (bmi <= 25.0) {
    result = "Normal";
  } else if (bmi <= 30.0) {
    result = "Overweight";
  } else if (bmi > 30.0) {
    result = "Obese";
  } else {
    result = "invalid input";
  }

  return result;
}
