function isValidWalk(walk) {
  let positionX = 0;
  let positionY = 0;

  if (walk.length === 10) {
    walk.forEach((element) => {
      if (element === "n") {
        positionY++;
      }
      if (element === "e") {
        positionX++;
      }
      if (element === "s") {
        positionY--;
      }
      if (element === "w") {
        positionX--;
      }
    });
    if (positionX === 0 && positionY === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
