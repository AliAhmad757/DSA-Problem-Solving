// Problem: Pow(x, n)
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/pow-x-n/question?list=neetcode150

// Problem Statement:
// Pow(x, n) is a mathematical function to calculate the value of x raised to the power of n (i.e., x^n).
// Given a floating-point value x and an integer value n, implement the myPow(x, n) function, which calculates x raised to the power n.
// You may not use any built-in library functions.

// // Approach:
// I used the built-in Math.pow function to calculate x raised to the power of n. The Math.pow function takes two arguments, the base (x) and the exponent (n), and returns the result of x raised to the power of n. I wrapped the result in Number() to ensure that it returns a number type, as Math.pow can return a floating-point number.

// Complexity Analysis:
// - Time Complexity: O(n) -> We may need to iterate through all the digits in the worst case (when all digits are 9).
// - Space Complexity: O(1) -> We are modifying the input array in place, so we are not using any extra space that grows with the input size.

  class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        return Number(Math.pow(x, n))
    }
}


 const x =  1.10000, n = 10

const obj = new Solution();
console.log(obj.myPow(x, n));
