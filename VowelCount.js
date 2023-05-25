function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      default:
        break;
    }
  }
  return count;
}
