module.exports = function check(str, bracketsConfig) {
  // your solution
  /*1. Define an amount of brackets/numbers template
      2. Create an array of str characters
      3. Check the str if it has any same open and close symbol in a row
      4. Delete them from array
      5. Repeat it untill array will be emty and return true.
      Otherwise return false.
    */
  let amount = bracketsConfig.length;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }

  function checkMass() {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < amount; j++) {
        if (arr[i] == bracketsConfig[j][0]
          && arr[i + 1] == bracketsConfig[j][1]) {
          arr.splice(i, 2);
        }
      }
    }
  }

  let counter = 0;

  do {
    checkMass();
    counter++;
  }

  while (counter < str.length / 2);

  if (arr == 0) {
    return true;
  } else {
    return false;
  }
}
