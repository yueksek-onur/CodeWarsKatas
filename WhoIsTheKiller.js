function killer(suspects, deadPeople) {
  for (const key in suspects) {
    let seenPeople = suspects[key];
    if (deadPeople.every((x) => seenPeople.includes(x))) {
      return key;
    }
  }
  return "The murderer could not be found ";
}
