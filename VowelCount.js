/**
 *
 * Description:
 *
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 *
 * Kata URL: https://www.codewars.com/kata/54ff3102c1bad923760001f3
 *
 *
 * @param {*} str
 * @returns
 */

function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      default:
        break;
    }
  }
  return count;
}
