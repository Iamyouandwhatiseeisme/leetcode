/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) break;
    res += first[i];
  }
  return res;
};
// @lc code=end
