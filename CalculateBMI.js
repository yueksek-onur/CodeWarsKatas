/**
 * Description:
 *
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 *
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 *
 * Kata URL: https://www.codewars.com/kata/57a429e253ba3381850000fb
 *
 *
 * @param {*} weight
 * @param {*} height
 * @returns
 */
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
