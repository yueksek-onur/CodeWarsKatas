/**
 * Description:
 *
 * Complete the solution so that it reverses the string passed into it.
 *
 * 'world'  =>  'dlrow'
 * 'word'   =>  'drow'
 *
 * Kata URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
 *
 * @param str
 * @returns revers str
 */

function solution(str) {
  return str.split("").reverse().join("");
}
