/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let sqrt = 0;
  for (let i = 1; i <= x; i++) {
    if (i * i === x) {
      sqrt = i;
      break;
    }
  }
  if (sqrt === 0) {
    let closestToSqrt = 1;
    for (let i = 1; i <= x; i++) {
      console.log(x - i * i, x - (i + 1) * (i + 1), "not found exact sqrt");
      let leftHandSiteSquar = x - i * i;
      let rightHandSiteSquar = x - (i + 1) * (i + 1);
      if (rightHandSiteSquar < 0) {
        sqrt = Math.floor(i);
        break;
      }
      if (leftHandSiteSquar < rightHandSiteSquar) {
        sqrt = Math.floor(i);
        break;
      }
    }
  }
  return sqrt;
};
console.log(mySqrt(8));
// @lc code=end
