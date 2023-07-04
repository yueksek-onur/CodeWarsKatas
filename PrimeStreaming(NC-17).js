class Primes {
  static *stream() {
    const segmentSize = 1e5;
    const primes = [2];
    let start = 3;

    yield* primes;

    while (true) {
      const segment = new Array(segmentSize).fill(true);

      for (const prime of primes) {
        const { firstMultipleIndex, firstMultiple } = calculateFirstMultiple(
          start,
          prime
        );
        for (let i = firstMultipleIndex; i < segmentSize; i += prime) {
          segment[i] = false;
        }
      }

      for (let i = 0; i < segmentSize; i++) {
        if (segment[i]) {
          const prime = start + i;
          primes.push(prime);
          yield prime;
        }
      }

      start += segmentSize;
    }
  }
}

function calculateFirstMultiple(start, prime) {
  const firstMultiple = Math.ceil(start / prime) * prime;
  const firstMultipleIndex = firstMultiple - start;
  return { firstMultipleIndex, firstMultiple };
}

const verify = (n, ...a) =>
  function () {
    const stream = Primes.stream();
    for (let i = 0; i < n; ++i) stream.next();
    for (const v of a) Test.assertEquals(stream.next().value, v);
  };
