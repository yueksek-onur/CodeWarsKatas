/**
 *
 * Description:
 *
 * Change every letter in a given string to
 * the next letter in the alphabet.
 * The function takes a single parameter s (string).
 *
 * Notes:
 *
 * Spaces and special characters should remain the same.
 * Capital letters should transfer in the same way but remain capitilized.
 *
 * Examples
 *
 * "Hello"               -->  "Ifmmp"
 * "What is your name?"  -->  "Xibu jt zpvs obnf?"
 * "zoo"                 -->  "app"
 * "zzZAaa"              -->  "aaABbb"
 *
 *
 * Kata URL:
 *
 * @param {*} str
 */

function nextLetter(str) {
  let strArr = str.split("");
  let result = "";

  strArr.forEach((element) => {
    if (/^[a-zA-Z]$/.test(element)) {
      if (element.charCodeAt() === 90 || element.charCodeAt() === 122) {
        if (element.charCodeAt() === 90) {
          result += String.fromCharCode(65);
        } else {
          result += String.fromCharCode(97);
        }
      } else {
        result += String.fromCharCode(element.charCodeAt() + 1);
      }
    } else {
      result += element;
    }
  });
  return result;
}

console.log(nextLetter("Hello"));
console.log(nextLetter("What is your name?"));
console.log(nextLetter("zoo"));
console.log(nextLetter("zzZAaa"));
//console.log(nextLetter());
