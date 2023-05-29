/**
 * Description:
 *
 * Given a set of numbers, return the additive
 * inverse of each. Each positive becomes negatives,
 * and the negatives become positives.
 *
 * invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 * invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
 * invert([]) == []
 *
 * You can assume that all values are integers.
 * Do not mutate the input array/list.
 *
 * Kata URL: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
 *
 * @param {*} array
 * @returns
 */

function invert(array) {
  let result = [];
  if (array.length === 0) {
    return result;
  } else {
    array.forEach((element) => {
      result.push(-1 * element);
    });
  }
  return result;
}
