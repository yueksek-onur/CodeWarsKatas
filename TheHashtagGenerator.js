/**
 * Description:
 *
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with our own Hashtag Generator!
 * Here's the deal:
 *
 * It must start with a hashtag (#).
 * All words must have their first letter capitalized.
 * If the final result is longer than 140 chars it must return false.
 * If the input or the result is an empty string it must return false.
 *
 * Examples
 *
 * " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
 * "    Hello     World   "                  =>  "#HelloWorld"
 * ""                                        =>  false
 *
 * Kata URL: https://www.codewars.com/kata/52449b062fb80683ec000024
 *
 *
 *
 * @param {*} str
 * @returns
 */

function generateHashtag(str) {
  let strArray = [];
  strArray = str.split(" ");
  let result = "#";
  strArray.forEach((element) => {
    if (typeof element && element) {
      result += capitalizeFirstLetter(element);
    }
  });
  if (result.length > 1 && result.length < 141) {
    return result;
  } else {
    return false;
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
