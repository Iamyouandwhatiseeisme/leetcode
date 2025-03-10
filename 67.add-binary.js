/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let newBinary = [];
  let arrayForA = [...a];
  let temp;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] + b[i] > 1) {
      newBinary.push(0);
      arrayForA.pop();
      let newArray = addBinary(arrayForA.join(""), "1");
    } else {
    }
  }
  return arrayForA.join("");
};

console.log(addBinary("11", "1"));

// @lc code=end
