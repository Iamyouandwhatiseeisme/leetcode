/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Convert the linked lists to arrays
  const firstNumber = Array.from(l1).reverse().join("");
  const secondNumber = Array.from(l2).reverse().join("");
  const sum = BigInt(firstNumber) + BigInt(secondNumber);
  const result = sum.toString().split("").reverse().map(Number);
  return ListNode(result[0], null);
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);
// @lc code=end
