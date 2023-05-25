function whatday(num) {
  let result = "";
  if (num === 1) {
    result = "Sunday";
  } else if (num === 2) {
    result = "Monday";
  } else if (num === 3) {
    result = "Tuesday";
  } else if (num === 4) {
    result = "Wednesday";
  } else if (num === 5) {
    result = "Thursday";
  } else if (num === 6) {
    result = "Friday";
  } else if (num === 7) {
    result = "Saturday";
  } else {
    result = "Wrong, please enter a number between 1 and 7";
  }

  return result;
}
