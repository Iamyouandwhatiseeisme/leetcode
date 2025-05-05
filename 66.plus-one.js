/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  } else {
    digits.pop();
    let newArray = [];
    if (digits.length === 0) {
      newArray = [1];
    } else {
      newArray = plusOne(digits);
    }
    newArray.push(0);

    return newArray;
  }
};
console.log(plusOne([9, 9, 9]));
// @lc code=end
