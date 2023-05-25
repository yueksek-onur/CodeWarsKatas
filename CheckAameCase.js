function sameCase(a, b) {
  const ascii_a = a.charCodeAt(0);
  const ascii_b = b.charCodeAt(0);
  let result = -1;

  if (ascii_a >= 65 && ascii_a <= 90 && ascii_b >= 65 && ascii_b <= 90) {
    // beide Uppercase
    result = 1;
  }
  if (ascii_a >= 97 && ascii_a <= 122 && ascii_b >= 97 && ascii_b <= 122) {
    // beide lowercase
    result = 1;
  }

  if (ascii_a >= 65 && ascii_a <= 90 && ascii_b >= 97 && ascii_b <= 122) {
    result = 0;
  }
  if (ascii_a >= 97 && ascii_a <= 122 && ascii_b >= 65 && ascii_b <= 90) {
    result = 0;
  }

  return result;
}
