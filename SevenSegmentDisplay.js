/**
 * Description:
 *
 * A Seven Segment Display is an electronic display device, used
 * to display decimal or hexadecimal numerals. It involves
 * seven led segments that are lit in specific combinations
 * to represent a specific numeral. An example of
 * each combination is shown below:
 *
 * seven segment display
 *
 * For this Kata, you must accept an integer
 * in the range 0 - 999999 and print it as
 * a string (in decimal format), with each digit being
 * represented as its own seven segment
 * display (6x seven segment displays in total). Each of
 * the individual led segments per display should be
 * represented by three hashes ###. Vertical bars | (ASCII 124)
 * represent the edges of each display, with a
 * single whitespace on either side between the edge and the
 * area of the led segments. An example of the
 * expected output is shown below:
 *
 * segment_display(123456) =
 *  |  ###  |  ###  |       |  ###  |  ###  |
 *  |     # |     # |     # | #   # | #     | #     |
 *  |     # |     # |     # | #   # | #     | #     |
 *  |     # |     # |     # | #   # | #     | #     |
 *  |       |  ###  |  ###  |  ###  |  ###  |  ###  |
 *  |     # | #     |     # |     # |     # | #   # |
 *  |     # | #     |     # |     # |     # | #   # |
 *  |     # | #     |     # |     # |     # | #   # |
 *  |       |  ###  |  ###  |       |  ###  |  ###  |
 *
 *
 * For clarity, the entire set of required combinations is provided below:
 *
 *  |  ###  |       |  ###  |  ###  |       |  ###  |  ###  |  ###  |  ###  |  ###  |
 *  | #   # |     # |     # |     # | #   # | #     | #     |     # | #   # | #   # |
 *  | #   # |     # |     # |     # | #   # | #     | #     |     # | #   # | #   # |
 *  | #   # |     # |     # |     # | #   # | #     | #     |     # | #   # | #   # |
 *  |       |       |  ###  |  ###  |  ###  |  ###  |  ###  |       |  ###  |  ###  |
 *  | #   # |     # | #     |     # |     # |     # | #   # |     # | #   # |     # |
 *  | #   # |     # | #     |     # |     # |     # | #   # |     # | #   # |     # |
 *  | #   # |     # | #     |     # |     # |     # | #   # |     # | #   # |     # |
 *  |  ###  |       |  ###  |  ###  |       |  ###  |  ###  |       |  ###  |  ###  |
 *
 *
 * If the number is smaller than 6 digits, the result
 * should be justified to the right, with the
 * unused segments being blank (as they are not turned on).
 * Refer to the sample test for an example.
 *
 *
 * Note: There should not be any trailing whitespace for any line.
 *
 * Please rate and enjoy!
 *
 * Kata URL: https://www.codewars.com/kata/5d7091aa7bf8d0001200c133
 *
 * @param {*} num
 * @returns
 */

function segmentDisplay(num) {
  num = String(num).split("");

  let result = [];
  let finalResult = [];

  //row 0
  num.forEach((n, i) => {
    if (n === "1" || n === "4") {
      result.push("       ");
    } else {
      result.push("  ###  ");
    }
    if (i === 5) {
      finalResult.push("|");
      finalResult.push(result.join("|"));
      finalResult.push("|\n");
      result = [];
    }
  });

  //row 2-4
  let counter = 0;
  while (counter < 3) {
    num.forEach((n, i) => {
      if (n === "1" || n === "2" || n === "3" || n === "7") {
        result.push("     # ");
      } else if (n === "5" || n === "6") {
        result.push(" #     ");
      } else {
        result.push(" #   # ");
      }
      if (i === 5) {
        finalResult.push("|");
        finalResult.push(result.join("|"));
        finalResult.push("|\n");
        result = [];
      }
    });
    counter++;
  }

  //row 5
  num.forEach((n, i) => {
    if (n === "0" || n === "1" || n === "7") {
      result.push("       ");
    } else {
      result.push("  ###  ");
    }
    if (i === 5) {
      finalResult.push("|");
      finalResult.push(result.join("|"));
      finalResult.push("|\n");
      result = [];
    }
  });

  //row 6-8
  let counter1 = 0;
  while (counter1 < 3) {
    num.forEach((n, i) => {
      if (n === "0" || n === "6") {
        result.push(" #   # ");
      } else if (n === "2") {
        result.push(" #     ");
      } else {
        result.push("     # ");
      }
      if (i === 5) {
        finalResult.push("|");
        finalResult.push(result.join("|"));
        finalResult.push("|\n");
        result = [];
      }
    });
    counter1++;
  }

  //row 9
  num.forEach((n, i) => {
    if (n === "1" || n === "4" || n === "7") {
      result.push("       ");
    } else {
      result.push("  ###  ");
    }
    if (i === 5) {
      finalResult.push("|");
      finalResult.push(result.join("|"));
      finalResult.push("|\n");
      result = [];
    }
  });

  let x = finalResult.join("");
  console.log(x);
  return x;
}
