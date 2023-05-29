/**
 * Description:
 *
 * Complete the function which returns the weekday according to the input number:
 *
 * 1 returns "Sunday"
 * 2 returns "Monday"
 * 3 returns "Tuesday"
 * 4 returns "Wednesday"
 * 5 returns "Thursday"
 * 6 returns "Friday"
 * 7 returns "Saturday"
 *
 * Otherwise returns "Wrong, please enter a number between 1 and 7"
 *
 * Kata URL: https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
 *
 *
 * @param {*} num
 * @returns
 */

function whatday(num) {
  let result = "";
  if (num === 1) {
    result = "Sunday";
  } else if (num === 2) {
    result = "Monday";
  } else if (num === 3) {
    result = "Tuesday";
  } else if (num === 4) {
    result = "Wednesday";
  } else if (num === 5) {
    result = "Thursday";
  } else if (num === 6) {
    result = "Friday";
  } else if (num === 7) {
    result = "Saturday";
  } else {
    result = "Wrong, please enter a number between 1 and 7";
  }

  return result;
}
