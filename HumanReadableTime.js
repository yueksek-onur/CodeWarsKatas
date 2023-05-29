/**
 * Description:
 *
 * Write a function, which takes a non-negative
 * integer (seconds) as input and returns the time
 * in a human-readable format (HH:MM:SS)
 *
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 *
 * The maximum time never exceeds 359999 (99:59:59)
 * You can find some examples in the test fixtures.
 *
 * Kata URL: https://www.codewars.com/kata/52685f7382004e774f0001f7
 *
 *
 * @param {*} seconds
 * @returns
 */

function humanReadable(seconds) {
  let HH = pad(Math.floor(seconds / 3600), 2);
  seconds = seconds - HH * 3600;
  let MM = pad(Math.floor(seconds / 60), 2);
  seconds = seconds - MM * 60;
  let SS = pad(seconds, 2);

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
  return `${HH}:${MM}:${SS}`;
}
