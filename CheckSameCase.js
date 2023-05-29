/**
 * Description:
 *
 * Write a function that will check if two given characters are the same case.
 *
 * If either of the characters is not a letter, return -1
 * If both characters are the same case, return 1
 * If both characters are letters, but not the same case, return 0
 *
 * Examples
 * 'a' and 'g' returns 1
 * 'A' and 'C' returns 1
 * 'b' and 'G' returns 0
 * 'B' and 'g' returns 0
 * '0' and '?' returns -1
 *
 *
 *
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */

function sameCase(a, b) {
  let result = -1;

  function isLetter(character) {
    return /^[a-zA-Z]$/.test(character);
  }

  if (isLetter(a) && isLetter(b)) {
    /^[a-z]{2}$|^[A-Z]{2}$/.test(a + b) ? (result = 1) : (result = 0);
  }

  return result;
}

// first solution
/*
function sameCase(a, b) {
  const ascii_a = a.charCodeAt(0);
  const ascii_b = b.charCodeAt(0);
  let result = -1;

  if (ascii_a >= 65 && ascii_a <= 90 && ascii_b >= 65 && ascii_b <= 90) {
    // beide Uppercase
    result = 1;
  }
  if (ascii_a >= 97 && ascii_a <= 122 && ascii_b >= 97 && ascii_b <= 122) {
    // beide lowercase
    result = 1;
  }

  if (ascii_a >= 65 && ascii_a <= 90 && ascii_b >= 97 && ascii_b <= 122) {
    result = 0;
  }
  if (ascii_a >= 97 && ascii_a <= 122 && ascii_b >= 65 && ascii_b <= 90) {
    result = 0;
  }

  return result;
}
*/
