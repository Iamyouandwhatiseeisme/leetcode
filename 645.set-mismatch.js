/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  var arrayToReturn = [];
  const sortedArray = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    for (let k = 0; k < sortedArray.length; k++) {
      console.log(i, k);

      if (sortedArray[i] === sortedArray[k] && i != k) {
        console.log(sortedArray[i], sortedArray[k], i, k, sortedArray);
        if (!arrayToReturn.includes(sortedArray[i])) {
          arrayToReturn.unshift(sortedArray[i]);
        }
      } else {
        if (
          sortedArray[i] != i + 1 &&
          !arrayToReturn.includes(i + 1) &&
          !sortedArray.includes(i + 1)
        ) {
          arrayToReturn.push(i + 1);
        }
      }
    }
  }
  return arrayToReturn;
};
// @lc code=end
