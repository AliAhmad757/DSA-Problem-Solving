// Problem: Non-Cyclical Number
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/non-cyclical-number/question?list=neetcode150

// Problem Statement:
// A non-cyclical number is an integer defined by the following algorithm:

// Given a positive integer, replace it with the sum of the squares of its digits.
// Repeat the above step until the number equals 1, or it loops infinitely in a cycle which does not include 1.
// If it stops at 1, then the number is a non-cyclical number.
// Given a positive integer n, return true if it is a non-cyclical number, otherwise return false.

// Approach:
// We can use the Floyd's Cycle Detection algorithm (also known as the Tortoise and Hare algorithm) to determine if the sequence of sums of squares leads to 1 or falls into a cycle. We maintain two pointers, slow and fast. The slow pointer moves one step at a time (calculating the sum of squares once), while the fast pointer moves two steps at a time (calculating the sum of squares twice). If there is a cycle, the fast pointer will eventually meet the slow pointer. If we reach 1, we return true.

// Complexity Analysis:
// - Time Complexity: O(n) -> In the worst case, we may need to compute the sum of squares for each number until we either reach 1 or detect a cycle. The number of unique sums of squares is limited, so this will eventually terminate.
// - Space Complexity: O(1) -> We are using a constant amount of space for the pointers and the sum of squares calculation, regardless of the input size.

class Solution {
  /**
   * Helper function to calculate sum of squares using pure math
   * @param {number} num
   * @return {number}
   */
  getSumOfSquares(num) {
      let sum = 0;
      while (num > 0) {
          let digit = num % 10;       // Get the last digit
          sum += digit * digit;       // Add its square to the sum
          num = Math.floor(num / 10); // Remove the last digit
      }
      return sum;
  }

  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
      // Initialize both pointers
      let slow = n;
      let fast = this.getSumOfSquares(n);

      // Loop until fast reaches 1 (happy) OR fast catches up to slow (cycle detected)
      while (fast !== 1 && slow !== fast) {
          slow = this.getSumOfSquares(slow);                            // Moves 1 step
          fast = this.getSumOfSquares(this.getSumOfSquares(fast));      // Moves 2 steps
      }

      // If fast is 1, it's a Happy Number. Otherwise, it's trapped in a cycle.
      return fast === 1;
  }
}

const n = 100;
const obj = new Solution();
console.log(obj.isHappy(n)); // true
