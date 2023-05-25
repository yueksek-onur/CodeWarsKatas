function dirReduc(arr) {
  const result = dirDelete(arr);
  return result;
}

function dirDelete(result) {
  for (let i = 0; i < result.length; i++) {
    if (i + 1 < result.length) {
      if (dirOpposite(result[i], result[i + 1])) {
        result.splice(i, 2);
        dirDelete(result);
      }
    }
  }
  return result;
}

function dirOpposite(dir1, dir2) {
  if (
    (dir1 === "SOUTH" && dir2 === "NORTH") ||
    (dir2 === "SOUTH" && dir1 === "NORTH")
  ) {
    return true;
  }

  if (
    (dir1 === "EAST" && dir2 === "WEST") ||
    (dir2 === "EAST" && dir1 === "WEST")
  ) {
    return true;
  }

  return false;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
//   ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
//   ["WEST"]

dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
//   ["NORTH", "WEST", "SOUTH", "EAST"]

["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], [];
