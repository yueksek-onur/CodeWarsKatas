function cakes(recipe, available) {
  let checkKeys = [];

  for (const key in recipe) {
    if (key in available) {
      checkKeys.push(available[key] / recipe[key]);
    } else {
      return 0;
    }
  }

  checkKeys.sort(function (a, b) {
    return a - b;
  });

  return Math.floor(checkKeys[0]);
}
