/**
 * Description:
 *
 * You get an array of numbers, return the sum of all of the positives ones.
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 *
 * Note: if there is nothing to sum, the sum is default to 0.
 *
 * Kata URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
 *
 * @param {*} arr
 * @returns sum positives elements of arr
 */

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    element > 0 ? (sum += element) : element;
  });
  return sum;
}
