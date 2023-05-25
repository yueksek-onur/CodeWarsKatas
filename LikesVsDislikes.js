// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  let like = "Like";
  let dislike = "Dislike";
  let nothing = "Nothing";
  let currentState = nothing;
  /* */
  buttons.forEach((element) => {
    if (element === like) {
      switch (currentState) {
        case like:
          currentState = nothing;
          break;
        case dislike:
          currentState = like;
          break;
        case nothing:
          currentState = like;
          break;
        default:
          break;
      }
    } else if (element === dislike) {
      switch (currentState) {
        case like:
          currentState = dislike;
          break;
        case dislike:
          currentState = nothing;
          break;
        case nothing:
          currentState = dislike;
          break;
        default:
          break;
      }
    }
  });
  return currentState;
}
