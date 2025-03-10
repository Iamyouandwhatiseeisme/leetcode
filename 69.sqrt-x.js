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
    console.log(i * i, x);

    if (i * i === x) {
      sqrt = i;
      break;
    }
  }
  if (sqrt === 0) {
    let closestToSqrt = 1;
    for (let i = 1; i <= x; i++) {
      console.log(i);

      if (x - i * i < x - (i + 1) * (i + 1)) {
        console.log(i * i - x, (i + 1) * (i + 1) - x, "last", i, i + 1, x);
        sqrt = Math.floor(i);
        // console.log(i * i);
      }
    }
  }
  return sqrt;
};
mySqrt(8);
// @lc code=end
