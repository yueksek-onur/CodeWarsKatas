// In progress not yet ready

/**
 * Description:
 *
 * Jump is a simple one-player game:
 *
 * You are initially at the first cell of an array
 * of cells containing non-negative integers;
 *
 * At each step you can jump ahead in the
 * array as far as the integer at the current cell,
 * or any smaller number of cells. You win if
 * there is a path that allows you to jump from one
 * cell to another, eventually jumping past
 * the end of the array, otherwise you lose.
 *
 * For instance, if the array contains the integers
 *
 * [2, 0, 3, 5, 0, 0, 3, 0, 0, 3, 1, 0],
 *
 * you can win by jumping from 2, to 3, to 5, to 3, to 3, then past the end of the array.
 *
 * You can also directly jump from from the initial cell(first cell) past the end of the array if they are integers to the right of that cell.
 *
 * E.g
 *
 * [6, 1, 1] is winnable
 * [6] is not winnable
 * Note: You can not jump from the last cell!
 * [1, 1, 3] is not winnable
 *
 * -----
 * Your task is to complete the function that determines if a given game is winnable.
 * More Examples
 * [5] => false (you can't jump from the last cell)
 * [2, 5] => true
 * [3, 0, 2, 3] => true (3 to 2 then past end of array)
 * [4, 1, 2, 0, 1] => false
 * [5, 0, 0, 0] => true
 * [1, 1] => false
 *
 * Kata URL: https://www.codewars.com/kata/594fae1a0462da7beb000046
 *
 *
 * @param {*} array
 * @returns
//  */
// function canJump(array) {
//   let pivot = array[0];
//   let currentPointer = 0;
//   let road = array.length + 1;
//   let sum = 0;
//   let iteration = 0;

//   //edge cases
//   if (array.length === 1) {
//     return false;
//   }
//   if (array.length === 2 && array[0] === 1) {
//     return false;
//   }
//   if (pivot >= road) {
//     return true;
//   }
//   if (pivot === array.length - 1) {
//     pivot--;
//   }

//   while (true) {
//     if (road - sum <= 0) {
//       return true;
//     }
//     if (currentPointer + pivot > array.length - 1) {
//       if (currentPointer !== array.length - 1) {
//         return true;
//       }
//     }

//     if (
//       array[currentPointer + pivot] !== 0 &&
//       currentPointer + pivot < array.length
//     ) {
//       currentPointer += pivot;
//       sum += pivot;
//       pivot = array[currentPointer];
//     } else {
//       if (pivot > 0) {
//         sum -= pivot;
//         pivot--;
//       }
//     }

//     if (sum >= road) {
//       return true;
//     }

//     if (iteration === array.length) {
//       return array[currentPointer] + pivot >= road ? true : false;
//     }
//     iteration++;
//   }
// }

function canJump(array) {
  let index = array[0];
  let pos = 0;
  let result = false;

  searchRoute();
  function searchRoute() {
    if (array.length === 1 || array.length === 0 || index === 0) {
      result = false;
      result;
    }

    if (array[pos] + array[index] > array.length) {
      result = true;
      result;
    } else {
      index--;
      pos = index;
    }
  }

  return result;
}

console.log(canJump([4, 1, 2, 0, 1])); // false
console.log(canJump([3, 0, 2, 3])); // true
console.log(canJump([1, 1])); // false
console.log(canJump([2, 0, 1, 5, 0, 0, 3, 0, 0, 3, 1, 0])); // true
console.log(canJump([2])); // fale
