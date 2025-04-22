/*
 * @lc app=leetcode id=1103 lang=javascript
 *
 * [1103] Distribute Candies to People
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let array = new Array(num_people).fill(0);
  let currentCandyCount = candies;
  let person = 0;
  for (let candyToGive = 1; candyToGive <= candies; ) {
    if (currentCandyCount - candyToGive < 0) {
      if (currentCandyCount !== 0) {
        console.log(currentCandyCount, "current");
        array[person] = array[person] + currentCandyCount;
      }
      break;
    }
    array[person] = array[person] + candyToGive;

    currentCandyCount = currentCandyCount - candyToGive;
    console.log(currentCandyCount, candyToGive);
    candyToGive++;
    if (person === num_people - 1) {
      person = 0;
    } else {
      person++;
    }
  }
  return array;
};
// @lc code=e
