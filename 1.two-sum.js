/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var x;
  var y;
  for (var i = 0; i <= nums.length; i++) {
    x = nums[i];
    for (var j = i + 1; j <= nums.length; j++) {
      if (nums[j] + x === target) {
        console.log(i, j);
        return [i, j];
      }
    }
  }
};
twoSum([2, 11, 7, 15], 9);
// @lc code=end
