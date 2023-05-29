/**
 * Create a function which compares two probabilities, returning
 * true if the first one is most likely otherwise false.
 *
 * For this exercise probability is
 * expressed as two numbers separated by a
 * colon e.g. a probability of 1 in 3 will be 1:3.
 *
 * So:
 * Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
 *
 * Kata URL: https://www.codewars.com/kata/56644a421b7c94c622000056
 *
 * @param {*} prob1
 * @param {*} prob2
 */

function mostLikely(prob1, prob2) {
  const [numerator1, denominator1] = prob1.split(":").map(Number);
  const [numerator2, denominator2] = prob2.split(":").map(Number);

  const actualProbability1 = numerator1 / denominator1;
  const actualProbability2 = numerator2 / denominator2;

  return actualProbability1 > actualProbability2;
}

console.log(mostLikely("1:1", "1:2")); // false
