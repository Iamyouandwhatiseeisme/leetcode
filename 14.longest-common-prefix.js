/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = "";
  var temp = "";
  var shortestIndex;
  var currentWordLength = strs[0].length;
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].length <= currentWordLength) {
      currentWordLength = strs[i].length;
      shortestIndex = i;
      temp = strs[i];
      currentWordLength = strs[i].length;
    }
  }

  for (var i = currentWordLength - 1; i >= 0; i--) {
    strs.forEach((word) => {
      console.log(word[i], temp[i]);
      if (word[i] !== temp[i]) {
        const temp2 = temp.slice(0, i);
        temp = temp2;
      }
    });
  }
  prefix = temp === undefined ? "" : temp;

  return prefix;
};
longestCommonPrefix(["a"]);
// @lc code=end
