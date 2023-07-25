/**
 * Description:
 *
 * JavaScript's indexOf does not work
 * with arrays as input. This is because
 * [1,2] === [1,2] will return false in
 * JavaScript. Many other languages have similar quirks.
 *
 * However, sometimes it is useful to
 * search for an Array. Write a function
 * that looks for an array within a two-dimensional
 * array and returns the index of the first matching
 * element. If there is no match, your function should return -1.
 *
 * See some examples:
 *
 * var arrayToSearch = [[1,2],[3,4],[5,6]];
 * var query = [1,2]; // => 0
 * query = [5,6]; // => 2
 * query = [9,2]; // => -1
 *
 * You will be required to validate the inputs on the following criteria:
 *
 * each element of the array to be searched should be an array;
 * each sub-array in the two-dimensional
 * array should be of length two; and
 * query should be an array of length two.
 *
 * If the inputs are not valid you should throw an Error.
 *
 * See some examples:
 *
 * var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
 * arrayToSearch = [1,2,3,4,5,6]; // => throw Error
 * arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
 * var query = [1,2]; // => valid input
 * query = 5; // => throw Error
 * query = [9,2,1]; // => throw Error
 *
 * @param {*} arrayToSearch
 * @param {*} query
 */

var searchArray = function (arrayToSearch, query) {
  let result = [];
  let indexOfArr = 0;
  if (
    Array.isArray(arrayToSearch) &&
    Array.isArray(query) &&
    query.length === 2
  ) {
    arrayToSearch.forEach((element) => {
      if (Array.isArray(element) && element.length == 2) {
        if (element[0] === query[0] && element[1] === query[1]) {
          result.push(indexOfArr);
        } else {
          indexOfArr++;
        }
      } else {
        throw new Error();
      }
    });
  } else {
    throw new Error();
  }
  if (result.length === 0) {
    return -1;
  }
  return result[0];
};

bigArray = [
  [2, 3],
  [7, 2],
  [9, 20],
  [1, 2],
  [7, 2],
  [45, 4],
  [7, 87],
  [4, 5],
  [2, 7],
  [6, 32],
];

searchFor = [9, 20];
console.log(searchArray.length);
console.log(searchArray(bigArray, searchFor));
