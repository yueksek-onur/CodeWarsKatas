var min = function (list) {
  return list.sort(function (a, b) {
    return a - b;
  })[0];
};

var max = function (list) {
  return list.sort(function (a, b) {
    return a - b;
  })[list.length - 1];
};
