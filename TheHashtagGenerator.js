function generateHashtag(str) {
  let strArray = [];
  strArray = str.split(" ");
  let result = "#";
  strArray.forEach((element) => {
    if (typeof element && element) {
      result += capitalizeFirstLetter(element);
    }
  });
  if (result.length > 1 && result.length < 141) {
    return result;
  } else {
    return false;
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
