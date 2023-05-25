var number = function (busStops) {
  let count = 0;
  busStops.forEach((element) => {
    count = count + element[0] - element[1];
  });
  return count;
};
