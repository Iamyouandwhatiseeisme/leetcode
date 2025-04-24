/*
 * @lc app=leetcode id=2413 lang=javascript
 *
 * [2413] Smallest Even Multiple
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  if (n === 2) {
    return 2;
  }
  if (n % 2 === 0) {
    return n;
  } else {
    return n * 2;
  }
};
console.log(smallestEvenMultiple(9));
// @lc code=end
