// not yet finished

function countPalindromes(a, b) {
  if (!Number.isInteger(a)) {
    a = Math.ceil(a);
  }
  if (!Number.isInteger(b)) {
    b = Math.floor(b);
  }

  let count = 0;

  for (let num = a; num <= b; num++) {
    if (isPalindrome(num)) {
      count++;
    }
  }

  return count;
}

function isPalindrome(num) {
  let str = num.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
