/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let wordArray = [...s];
  let wordWithoutSpace;
  let lastIndexOfWord = wordArray.lastIndexOf(" ");
  if (wordArray[wordArray.length - 1] !== " ") {
    return wordArray.length - 1 - lastIndexOfWord;
  } else {
    wordArray.pop();

    wordWithoutSpace = lengthOfLastWord(wordArray.join(""));
  }
  return wordWithoutSpace;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
// @lc code=end
