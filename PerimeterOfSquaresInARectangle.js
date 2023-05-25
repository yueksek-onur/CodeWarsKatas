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
