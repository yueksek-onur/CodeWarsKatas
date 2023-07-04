/**
 * Description:
 *
 * Write two functions that convert a roman numeral
 * to and from an integer value. Multiple roman numeral
 * values will be tested for each function.
 *
 * Modern Roman numerals are written by expressing
 * each digit separately starting with the left most
 * digit and skipping any digit with a value of zero.
 * In Roman numerals 1990 is
 * rendered: 1000=M, 900=CM, 90=XC;
 * resulting in MCMXC. 2008 is written as 2000=MM,
 * 8=VIII; or MMVIII. 1666 uses each Roman
 * symbol in descending order: MDCLXVI.
 *
 * Input range : 1 <= n < 4000
 *
 * In this kata 4 should be represented
 * as IV, NOT as IIII (the "watchmaker's four").
 *
 * Examples
 *
 * to roman:
 * 2000 -> "MM"
 * 1666 -> "MDCLXVI"
 * 1000 -> "M"
 *  400 -> "CD"
 *   90 -> "XC"
 *   40 -> "XL"
 *    1 -> "I"
 *
 * from roman:
 * "MM"      -> 2000
 * "MDCLXVI" -> 1666
 * "M"       -> 1000
 * "CD"      -> 400
 * "XC"      -> 90
 * "XL"      -> 40
 * "I"       -> 1
 *
 * Help
 * Symbol 	Value
 * I 	1
 * IV 	4
 * V 	5
 * X 	10
 * L 	50
 * C 	100
 * D 	500
 * M 	1000
 *
 * Kata URL: https://www.codewars.com/kata/51b66044bce5799a7f000003
 */

class RomanNumerals {
  static toRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];

    let roman = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        roman += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }

    return roman;
  }

  static fromRoman(str) {
    const decoderOBJ = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };

    let result = 0;
    let i = 0;
    while (i < str.length) {
      if (i + 1 < str.length && decoderOBJ[str.substring(i, i + 2)]) {
        result += decoderOBJ[str.substring(i, i + 2)];
        i += 2;
      } else {
        result += decoderOBJ[str[i]];
        i++;
      }
    }

    return result;
  }
}
