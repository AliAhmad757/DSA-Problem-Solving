// Problem: Pow(x, n)
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/pow-x-n/question?list=neetcode150

// Problem Statement:
// Pow(x, n) is a mathematical function to calculate the value of x raised to the power of n (i.e., x^n).
// Given a floating-point value x and an integer value n, implement the myPow(x, n) function, which calculates x raised to the power n.
// You may not use any built-in library functions.

// // Approach:
// I used the method of exponentiation by squaring to calculate x^n efficiently. If n is negative, I take the reciprocal of x and make n positive. Then, I initialize a variable res to 1. I loop while n is greater than 0. If n is odd, I multiply res by x. Then, I square x and halve n (using floor division). This way, we reduce the number of multiplications needed to calculate x^n, resulting in a logarithmic time complexity.

// Complexity Analysis:
// - Time Complexity: O(log n) -> We are halving n at each step, so the number of steps is proportional to log(n).
// - Space Complexity: O(1) -> We are using a constant amount of space to store the result and intermediate variables.

  class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
   myPow(x, n) {
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n; 
    }
    
    let res = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            res = res * x;
        }

        x = x * x;
        n = Math.floor(n / 2);
    }
    
    return res;
}
}

const x =  1.10000, n = 10

const obj = new Solution();
console.log(obj.myPow(x, n));
