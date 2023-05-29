// In progress not yet ready

/**
 * Description:
 *
 * Background
 *
 * Palindromes are a special type of
 * number (in this case a non-negative integer)
 * that reads the same backwards as forwards.
 * A number defined this way is called palindromic.
 *
 * The following numbers are palindromes: 0, 252, 769967, 1111111.
 * The following numbers are not palindromes: 123, 689, 565656, 12345432.
 *
 * Problem Description
 *
 * In this kata, you are required to build a
 * function that receives two arguments,
 * a and b, and returns the number of integer
 * palindromes between a and b inclusive.
 *
 * Examples
 *
 * If a is 6 and b is 11, the function should output
 * 5 because there are 5 palindromes
 * between 6 and 11 inclusive: 6, 7, 8, 9 and 11.
 *
 *
 * If a is 150 and b is 250, the function should output 10
 * because there are 10 palindromes
 * between 150 and 250 inclusive:
 * 151, 161, 171, 181, 191, 202, 212, 222, 232 and 242.
 *
 *
 * If a is 1002 and b is 1110, the function
 * should output 0: there are no palindromes
 * between 1002 and 1110 inclusive.
 *
 * Input Constraints
 *
 * Fixed test cases: 0 ≤ a, b ≤ 100 (one hundred)
 * Small test cases: 0 ≤ a, b ≤ 10^5 (one hundred thousand)
 * Medium test cases: 0 ≤ a, b ≤ 10^10 (ten billion)
 * Large test cases: 0 ≤ a, b ≤ 10^15 (one quadrillion)
 *
 * Ideally, a program should pass all the test cases in
 * no more than 800 milliseconds.
 *
 * Edge Cases
 * Note that 0 is palindromic.
 *
 * Numbers except 0 that start with 0 do not count.
 * If a and b are not integers, round a up and b down.
 * This is my first kata created. Hope you enjoy! <3
 *
 *
 * Kata URL: https://www.codewars.com/kata/64607242d3560e0043c3de25
 *
 *
 * @param a
 * @param b
 * @returns
 */

function countPalindromes(a, b) {
  const A050250 = {
    1: 9,
    2: 18,
    3: 108,
    4: 198,
    5: 10998,
    8: 19998,
    9: 109998,
    10: 199998,
    11: 1099998,
    12: 1999998,
    13: 10999998,
    14: 19999998,
    15: 109999998,
    16: 199999998,
    17: 1099999998,
    18: 1999999998,
    19: 10999999998,
  };

  if (!Number.isInteger(a)) {
    a = Math.ceil(a);
  }
  if (!Number.isInteger(b)) {
    b = Math.floor(b);
  }

  let count = 0;

  for (let num = a; num <= b; num++) {
    if (isPalindrome(num)) {
      count++;
    }
  }

  return count;
}

function isPalindrome(num) {
  let str = num.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(countPalindromes(0, 99));
