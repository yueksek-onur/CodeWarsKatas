/**
 * Description:
 *
 * Create an endless stream of prime numbers - a bit like IntStream.of(2,3,5,7,11,13,17), but infinite ( well, long ).
 * The stream must be able to produce 25 million primes in seconds.
 *
 * If this is too hard, try Prime Streaming (PG-13).
 *
 * Kata URL: https://www.codewars.com/kata/59122604e5bc240817000016
 *
 */

class Primes {
  static *stream() {
    const primes = [];
    let num = 2;

    while (true) {
      if (isPrime(num)) {
        primes.push(num);
        yield num;
      }
      num++;
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}
