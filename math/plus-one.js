// Problem: Plus One
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/plus-one/question?list=neetcode150

// Problem Statement:
// You are given an integer array digits, where each digits[i] is the ith digit of a large integer. It is ordered from most significant to least significant digit, and it will not contain any leading zero.
// Return the digits of the given integer after incrementing it by one.

// // Approach:
// I iterated through the digits array from the end to the beginning. For each digit, I checked if it is 9. If it is 9, I set it to 0 and continue to the next digit (to handle the carry). If it is not 9, I simply increment it by 1 and return the modified digits array immediately, since no further changes are needed. If the loop finishes and all digits were 9, it means we need to add a new most significant digit (1) at the beginning of the array, so I used unshift to add 1 at the start of the array and returned it.


// Complexity Analysis:
// - Time Complexity: O(n) -> We may need to iterate through all the digits in the worst case (when all digits are 9).
// - Space Complexity: O(1) -> We are modifying the input array in place, so we are not using any extra space that grows with the input size.

class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        return digits;
      }
    }
    
    // If the loop finishes, we had all 9s. 
    digits.unshift(1);
    return digits;
  }
}

const digits = [];

const obj = new Solution();
console.log(obj.plusOne(digits));
