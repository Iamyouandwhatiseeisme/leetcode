/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var int = 0;
  const arr = [...s];
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (var i = 0; i < arr.length; i++) {
    temp = romanToInt[arr[i]];

    if (arr[i] === "I" && (arr[i + 1] === "V" || arr[i + 1] === "X")) {
      temp = arr[i + 1] === "X" ? 9 : 4;
      i++;
    } else if (arr[i] === "X" && (arr[i + 1] === "L" || arr[i + 1] === "C")) {
      temp = arr[i + 1] === "L" ? 40 : 90;
      i++;
    } else if (arr[i] === "C" && (arr[i + 1] === "D" || arr[i + 1] === "M")) {
      temp = arr[i + 1] === "D" ? 400 : 900;
      i++;
    }

    int += temp;
    console.log(temp);
  }
  return int;
};
romanToInt("XLIV");
// @lc code=end
