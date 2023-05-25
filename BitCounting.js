/** 
 * var countBits = function (n) {
  const digitsInBinar = (n >>> 0).toString(2).split("");
  let result = 0;
  digitsInBinar.forEach((element) => {
    if (parseInt(element) != 0) {
      result = result + parseInt(element);
    }
  });
  return result;
};
 */

function countBits(num) {
  const binaryString = num.toString(2);

  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      count++;
    }
  }

  return count;
}
