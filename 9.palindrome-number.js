/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var isPalindrome = true;
  const stringify = x.toString();
  const arr = [...stringify];
  const reverseArr = [...arr].reverse();

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], reverseArr[i]);
    if (arr[i] !== reverseArr[i]) {
      console.log(arr[i], reverseArr[i]);
      isPalindrome = false;
      break;
    } else {
      isPalindrome = true;
    }
  }
  console.log(isPalindrome);
  return isPalindrome;
};
isPalindrome(1000021);
// @lc code=end
