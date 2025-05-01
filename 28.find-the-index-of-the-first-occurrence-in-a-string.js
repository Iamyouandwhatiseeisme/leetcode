/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let appears = needle.length;
  console.log(appears);
  if (needle.length > haystack.length) {
    return -1;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      appears--;
      let firstOccurenceIndex = i;
      console.log(haystack[i], needle[0], appears, i);

      if (appears === 0) {
        return firstOccurenceIndex;
      }
      let temp = i + 1;
      for (let k = 1; k <= needle.length; k++) {
        if (
          haystack[temp] === needle[k] &&
          haystack[temp] !== undefined &&
          needle[k] !== undefined
        ) {
          appears--;
          console.log(appears, temp, k, "appae", haystack[temp], needle[k]);

          temp++;
        } else {
          if (
            haystack[temp] !== needle[k] ||
            (k === needle.length && appears !== 0)
          ) {
            console.log(haystack[temp], needle[k]);
            appears = needle.length;
          }
        }
        if (appears === 0) {
          return firstOccurenceIndex;
        }
      }
    }
  }
  return -1;
};
console.log(strStr("ababaabaaa", "ababaaa"));

// @lc code=end
