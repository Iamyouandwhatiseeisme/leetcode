/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let addressArray = Array.from(address);
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i] === ".") {
      addressArray.splice(i, 0, "[");
      addressArray.splice(i + 2, 0, "]");
      i = i + 2;
    }
  }
  return addressArray.join("");
};
console.log(defangIPaddr("1.2.3"));
// @lc code=end
