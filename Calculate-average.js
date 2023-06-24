/**
 * Description:
 *
 * Write a function which calculates the average
 * of the numbers in a given list.
 *
 * Note: Empty arrays should return 0.
 *
 * Kata URL: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
 *
 * Fundamentals Arrays
 *
 * @param {*} array
 * @returns
 */

function findAverage(array) {
  let sum = 0;

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
      console.log(array[i]);
      console.log(sum);
    }
    return sum / array.length;
  }
  return 0;
}
