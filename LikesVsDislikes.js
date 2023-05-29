/**
 * Description:
 *
 * Story
 * YouTube had a like and a dislike button, which
 * allowed users to express their opinions
 * about particular content. It was set
 * up in such a way that you cannot like and
 * dislike a video at the same time. There
 * are two other interesting rules to be
 * noted about the interface: Pressing a button,
 * which is already active, will undo your press.
 * If you press the like button after pressing
 * the dislike button, the like button
 * overwrites the previous "Dislike" state.
 * The same is true for the other way round.
 *
 * Task
 * Create a function that takes
 * in a list of button inputs and returns the final state.
 *
 * Examples
 *
 * likeOrDislike([Dislike]) => Dislike
 * likeOrDislike([Like,Like]) => Nothing
 * likeOrDislike([Dislike,Like]) => Like
 * likeOrDislike([Like,Dislike,Dislike]) => Nothing
 *
 *
 * Notes
 * If no button is currently active, return Nothing.
 * If the list is empty, return Nothing.
 *
 * Kata URL:https://www.codewars.com/kata/62ad72443809a4006998218a
 *
 *
 * @param {*} buttons
 * @returns
 */

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
