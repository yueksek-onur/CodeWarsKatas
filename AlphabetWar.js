function alphabetWar(fight) {
  const weightedLetters = {
    leftSideLetters: {
      w: 4,
      p: 3,
      b: 2,
      s: 1,
    },
    rightSideLetters: {
      m: 4,
      q: 3,
      d: 2,
      z: 1,
    },
  };
  let leftSideScore = 0;
  let rightSideScore = 0;

  for (let i = 0; i < fight.length; i++) {
    try {
      if (
        "undefined" != typeof weightedLetters.leftSideLetters[fight.charAt(i)]
      ) {
        leftSideScore += weightedLetters.leftSideLetters[fight.charAt(i)];
      }
    } catch (error) {}

    try {
      if (
        "undefined" != typeof weightedLetters.rightSideLetters[fight.charAt(i)]
      ) {
        rightSideScore += weightedLetters.rightSideLetters[fight.charAt(i)];
      }
    } catch (error) {}
  }

  if (leftSideScore === rightSideScore) {
    return "Let's fight again!";
  } else if (leftSideScore > rightSideScore) {
    return "Left side wins!";
  } else {
    return "Right side wins!";
  }
}
