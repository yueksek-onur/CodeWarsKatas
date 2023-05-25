function elevator(left, right, call) {
  // code on! :)
  let result;
  if (left === call || right === call) {
    if (right === call) {
      result = "right";
    } else {
      result = "left";
    }
  }

  if (Math.abs(call - left) < Math.abs(call - right)) {
    result = "left";
  }
  if (Math.abs(call - right) < Math.abs(call - left)) {
    result = "right";
  }
  if (Math.abs(call - right) === Math.abs(call - left)) {
    result = "right";
  }

  return result;
}
