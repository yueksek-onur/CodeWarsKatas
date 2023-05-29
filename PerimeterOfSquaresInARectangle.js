/**
 * Description:
 *
 * The drawing shows 6 squares the sides
 * of which have a length of 1, 1, 2, 3, 5, 8. It's easy
 * to see that the sum of the perimeters of these squares
 * is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
 *
 * Could you give the sum of the perimeters
 * of all the squares in a rectangle when there
 * are n + 1 squares disposed in the same manner as in the drawing:
 *
 * alternative text
 *
 * Hint: See Fibonacci sequence
 * Ref: http://oeis.org/A000045
 *
 * The function perimeter has for parameter
 * n where n + 1 is the number of squares
 * (they are numbered from 0 to n) and returns
 * the total perimeter of all the squares.
 *
 * perimeter(5)  should return 80
 * perimeter(7)  should return 216
 *
 * Kata URL: https://www.codewars.com/kata/559a28007caad2ac4e000083
 *
 *
 */

function perimeter(n) {
  return FibonacciSum(n + 1) * 4;
}

function FibonacciSum(n) {
  const FibonacciSequence = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      FibonacciSequence.unshift(parseInt(1));
    } else if (i === 1) {
      FibonacciSequence.unshift(parseInt(1));
    } else {
      FibonacciSequence.push(
        FibonacciSequence[i - 2] + FibonacciSequence[i - 1]
      );
    }
  }

  for (let i = 0; i < FibonacciSequence.length; i++) {
    result += FibonacciSequence[i];
  }

  return result;
}
