/**
 * Description:
 *
 * The purpose of this kata is to implement
 * the undoRedo function.
 *
 * This function takes an object and returns
 * an object that has these actions to be performed
 * on the object passed as a parameter:
 *
 * set(key, value) Assigns the value to the key.
 * If the key does not exist, creates it.
 *
 * get(key) Returns the value associated to the key.
 *
 * del(key) removes the key from the object.
 *
 * undo() Undo the last operation (set or del) on
 * the object. Throws an exception if there is no operation to undo.
 *
 * redo() Redo the last undo operation
 * (redo is only possible after an undo).
 * Throws an exception if there is no operation to redo.
 *
 * After set() or del() are called, there is nothing to redo.
 *
 * All actions must affect to the object
 * passed to undoRedo(object) function.
 * So you can not work with a copy of the object.
 *
 * Any set/del after an undo should disallow new redos.
 *
 *
 * Kata URL: https://www.codewars.com/kata/531489f2bb244a5b9f00077e
 *
 * @param {*} object
 * @returns
 */

function undoRedo(object) {
  let history = [];
  let undoAction = [];
  let step = 0;

  let undocounter = 0;
  let redocounter = 0;

  function deepClone(object) {
    return JSON.parse(JSON.stringify(object));
  }

  return {
    set: function (key, value) {
      history.push(deepClone(object));
      object[key] = value;
      history.push(deepClone(object));
      step++;
    },

    get: function (key) {
      return object[key];
    },

    del: function (key) {
      delete object[key];
      history.push(deepClone(object));
      step++;
    },

    undo: function () {
      if (undocounter === step) {
        return new Error("Nothing to undo");
      } else {
        // const newOBJState = deepClone(object);
        undoAction.push(object.pop());
        undocounter++;
        step--;
      }
    },

    redo: function () {
      if (redocounter === step) {
        throw new Error("Nothing to redo.");
      } else {
        try {
          object.push(undoAction.pop());
          redocounter++;
          undocounter--;
          step++;
        } catch (error) {
          return error;
        }
      }
    },
  };
}

/*

function undoRedo(object) {
  let history = [];
  history.push(JSON.parse(JSON.stringify(object)));
  let undocounter = 0;
  let redocounter = 0;

  return {
    set: function (key, value) {
      object[key] = value;
      history.push(JSON.parse(JSON.stringify(object)));
      undocounter++;
      redocounter = undocounter;
    },

    get: function (key) {
      return object[key];
    },

    del: function (key) {
      delete object[key];
      history.push(JSON.parse(JSON.stringify(object)));
      undocounter++;
      redocounter = undocounter;
    },

    undo: function () {
      if (undocounter <= 0) {
        return new Error("Nothing to undo");
      } else {
        redocounter = undocounter;
        undocounter--;
        object = JSON.parse(JSON.stringify(history[undocounter]));
      }
    },

    redo: function () {
      if (redocounter === undocounter) {
        throw new Error("Nothing to redo.");
      } else {
        try {
          undocounter = redocounter;

          object = JSON.parse(JSON.stringify(history[redocounter]));
          redocounter++;
        } catch (error) {
          return error;
        }
      }
    },
  };
}

*/

//_______________________________;

// var obj = {
//   x: 1,
//   y: 2,
// };

// var unRe = undoRedo(obj);

// console.log((unRe.get("x"), 1, "The get method returns the value of a key"));
// unRe.set("x", 3);
// console.log((unRe.get("x"), 3, "The set method change the value of a key"));

// console.log(
//   "##################################################################"
// );
// var obj = {
//   x: 1,
//   y: 2,
// };

// var unRe = undoRedo(obj);
// unRe.set("y", 10);
// console.log(unRe.get("y"), 10, "The get method returns the value of a key");
// unRe.undo();
// console.log(unRe.get("y"), 2, "The undo method restores the previous state");
// try {
//   unRe.undo();
//   Test.expect(false, "It should have thrown an exception");
// } catch (e) {
//   console.log(unRe.get("y"), 2);
// }

// console.log("###########################################################");
// var obj = {
//   x: 1,
//   y: 2,
// };

// var unRe = undoRedo(obj);
// unRe.set("y", 10);
// console.log(unRe.get("y"), 10, "The get method returns the value of a key");
// unRe.undo();
// console.log(unRe.get("y"), 2, "The undo method restores the previous state");
// unRe.redo();
// console.log(unRe.get("y"), 10, "The undo method restores the previous state");
// try {
//   unRe.redo();
//   Test.expect(false, "It should have thrown an exception");
// } catch (e) {
//   console.log(unRe.get("y"), 10);
// }

// console.log("############################################################");
// var obj = {
//   x: 1,
//   y: 2,
// };

// var unRe = undoRedo(obj);
// unRe.set("y", 10);
// unRe.set("y", 100);
// unRe.set("x", 150);
// unRe.set("x", 50);
// console.log(unRe.get("y"), 100, "The get method returns the value of a key");
// console.log(unRe.get("x"), 50, "The get method returns the value of a key");
// unRe.undo();
// console.log(unRe.get("x"), 150, "The undo method restores the previous state");
// console.log(unRe.get("y"), 100, "The y key stays the same");
// unRe.redo();
// console.log(unRe.get("x"), 50, "Undo the x value");
// console.log(unRe.get("y"), 100, "The y key stays the same");
// unRe.undo();
// unRe.undo();
// console.log(unRe.get("x"), 1, "Undo the x value");
// console.log(unRe.get("y"), 100, "The y key stays the same");
// unRe.undo();
// unRe.undo();
// console.log(unRe.get("y"), 2, "Undo the y value");
// console.log(unRe.get("x"), 1, "The x key stays the same");
// try {
//   unRe.undo();
//   Test.expect(false, "It should have thrown an exception");
// } catch (e) {
//   console.log(unRe.get("y"), 2, "There is nothing to undo");
// }
// unRe.redo();
// unRe.redo();
// unRe.redo();
// unRe.redo();
// console.log(unRe.get("y"), 100, "y key redo state");
// console.log(unRe.get("x"), 50, "y key redo state");
// try {
//   unRe.redo();
//   console.log(false, "It should have thrown an exception");
// } catch (e) {
//   console.log(unRe.get("y"), 100, "There is nothing to redo");
// }

// console.log("###########################################################");
// var obj = {
//   x: 1,
//   y: 2,
// };

// var unRe = undoRedo(obj);
// unRe.set("z", 10);
// console.log(unRe.get("z"), 10, "A new key has been added");
// unRe.undo();
// console.log(unRe.get("z"), undefined, "The z key should not exist");
// unRe.redo();
// console.log(unRe.get("z"), 10, "A new key has been added");

// console.log("'#########################################################'");
// var obj = {
//   x: 1,
//   y: 2,
// };

// var unRe = undoRedo(obj);
// unRe.del("x");
// console.log(unRe.get("x"), undefined, "The x key should not exist");
// console.log(!obj.hasOwnProperty("x"), "The x key should be deleted");
// unRe.undo();
// console.log(unRe.get("x"), 1, "A new key has been added");
// unRe.redo();
// console.log(unRe.get("x"), undefined, "The x key should not exist");
// console.log(!obj.hasOwnProperty("x"), "The x key should be deleted");
