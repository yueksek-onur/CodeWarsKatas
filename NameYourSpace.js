/**
 * Description:
 *
 * Finish the namespace function so
 * that it sets or gets the value at the path specified. The first
 * argument should be the root object that the path belongs
 * to. The 2nd argument is the path itself and the 3rd
 * optional argument is the value to set at the path.
 *
 * If a value is provided then the path will be set to
 * that value. Any objects not present within the path will be
 * created automatically in order for the path to be successfully set.
 *
 *
 * let stuff = {}
 * namespace(stuff, 'moreStuff.name', 'the stuff')
 * // results in {moreStuff: {name: 'the stuff'}}
 *
 * If no value is provided the the function
 * will return the value at the path given.
 * If the path is not valid/present then undefined will be returned.
 *
 * namespace(stuff, 'moreStuff.name')
 * // returns 'the stuff'
 *
 * namesace(stuff, 'otherStuff.id')
 * // returns undefined
 *
 * Kata URL: https://www.codewars.com/kata/514b6c44a337752e67000077
 *
 * @param {*} root
 * @param {*} path
 * @param {*} value
 */

function namespace(root, path, value) {
  if (value === undefined) {
    if (Object.hasOwnProperty.call(root, path)) {
      return root.path;
    } else {
      return undefined;
    }
  } else {
    let patharr = path.split(".");
    let currentObj = root;
    for (let i = 0; i < patharr.length - 1; i++) {
      const key = patharr[i];
      currentObj[key] = currentObj[key] || {};
      currentObj = currentObj[key];
    }
    currentObj[patharr[patharr.length - 1]] = value;
  }
}
