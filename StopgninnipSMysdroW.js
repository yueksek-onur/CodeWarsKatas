/**
 * Description:
 *
 * Write a function that takes in a string of one or more words, and
 * returns the same string, but with all five or more letter words
 * reversed (Just like the name of this Kata). Strings passed
 * in will consist of only letters and spaces. Spaces will
 * be included only when more than one word is present.
 *
 * Examples:
 *
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test"
 *
 * Strings Algorithms
 *
 * kata URL: https://www.codewars.com/kata/5264d2b162488dc400000001
 *
 * @param {*} words
 */

function spinWords(string) {
  let result = "";
  const words = string.split(" ");
  words.forEach((word) => {
    if (word.length >= 5) {
      result += word.split("").reverse().join("") + " ";
    } else {
      result += word + " ";
    }
  });
  return result.slice(0, result.length - 1);
}
console.log(spinWords("Hey fellow warriors"));
spinWords("Hey fellow warriors"); //=> returns "Hey wollef sroirraw"
spinWords("This is a test"); //=> returns "This is a test"
spinWords("This is another test"); //> returns "This is rehtona test"
