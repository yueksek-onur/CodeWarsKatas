/**
 * Description:
 *
 * This time no story, no theory. The examples
 * below show you how to write function accum:
 *
 * Examples:
 *
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 *
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 *
 * Kata URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 *
 *
 * @param {*} input
 * @returns
 */

function accum(input) {
  let Inputstack = input.split("");
  let multiplier = 0;
  let result = "";
  Inputstack.forEach((element) => {
    result += element.toUpperCase() + "-";
    if (multiplier >= 0) {
      result = result.substring(0, result.length - 1);
      result += element.toLowerCase().repeat(multiplier) + "-";
    }
    multiplier++;
  });

  return result.substring(0, result.length - 1);
}
