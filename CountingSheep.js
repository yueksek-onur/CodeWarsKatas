function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

//############################################

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((element) => {
    element ? count++ : count;
  });
  return count;
}
