/**
 * Python:
 *
 * Create a function running_average() that returns a
 * callable function object. Update the series with each
 * given value and calculate the current average.
 *
 * r_avg = running_average()
 * r_avg(10) = 10.0
 * r_avg(11) = 10.5
 * r_avg(12) = 11
 *
 * All input values are valid. Round to two decimal places.
 *
 * This Kata is based on a example from Fluent Python book.
 *
 * Javascript // Lua // C++:
 *
 * Create a function runningAverage() that returns a
 * callable function object. Update the series with each
 * given value and calculate the current average.
 *
 * rAvg = runningAverage();
 *
 * rAvg(10) = 10.0;
 * rAvg(11) = 10.5;
 * rAvg(12) = 11;
 *
 *
 * Kata URL: https://www.codewars.com/kata/589e4d646642d144a90000d8
 *
 * @returns
 */

function runningAverage() {
  let numbers = [];
  return function rAvgSol(params) {
    let sum = 0;
    numbers.push(params);
    numbers.forEach((element) => {
      sum += element;
    });
    return parseFloat((sum / numbers.length).toFixed(2));
  };
}

// function runningAverage() {
//   let numbers = [];
//   return function rAvgSol(params) {
//     let sum = 0;
//     let result = 0;
//     numbers.push(params);
//     numbers.forEach((element) => {
//       sum += element;
//     });
//     result = sum / numbers.length;
//     result = (result * 100).toFixed(0);
//     return result / 100;
//   };
// }
