/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    if (nums[0] > target) {
      return 0;
    }
    let indexToReturn = -1;
    let minDifference = nums[0] - target;
    let indexOfNum = 0;
    nums.findIndex((num) => {
      if (num < target) {
        minDifference = target;

        indexOfNum = nums.indexOf(num);
      } else {
        return 0;
      }
    });

    indexToReturn = indexOfNum + 1;
    return indexToReturn;
  }

  return nums.indexOf(target);
};
console.log(searchInsert([1, 3, 5, 6], 0));
// @lc code=end
