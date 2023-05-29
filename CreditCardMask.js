/**
 * Description:
 *
 * Usually when you buy something, you're asked whether
 * your credit card number, phone number or answer to your most
 * secret question is still correct. However, since someone could
 * look over your shoulder, you don't want that shown on your screen.
 * Instead, we mask it.
 *
 * Your task is to write a function maskify, which
 * changes all but the last four characters into '#'.
 *
 * Examples
 *
 * maskify("4556364607935616") == "############5616"
 * maskify(     "64607935616") ==      "#######5616"
 * maskify(               "1") ==                "1"
 * maskify(                "") ==                 ""
 *
 *
 * "What was the name of your first pet?"
 * maskify("Skippy") == "##ippy"
 * maskify("Nananananananananananananananana Batman!")
 *       =="####################################man!"
 *
 * Kata URL: https://www.codewars.com/kata/5412509bd436bd33920011bc
 *
 * @param {*} input
 * @returns
 */

function maskify(input) {
  let reuslt = "";
  for (let i = 0; i < input.length; i++) {
    if (i >= input.length - 4) {
      reuslt += input[i];
    } else {
      reuslt += "#";
    }
  }
  return reuslt;
}
