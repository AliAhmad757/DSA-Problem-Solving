// Problem: Products of Array Except Self
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/products-of-array-discluding-self/question?list=neetcode150

// Problem Statement:
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in 
// O(n)
// O(n) time without using the division operation?

// Approach:
// I created an output array where each element at index i contains the product of all the elements to the left of i in the input array.
// Then, I iterated through the input array from right to left, maintaining a variable postfix that contains the product of all the elements to the right of i. 
// I multiplied the current value of postfix with the value at index i in the output array and updated postfix by multiplying it with the current element in the input array.

// This way, we can calculate the product of all elements except self without using division and in O(n) time complexity.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(n) -> We use an output array to store the products.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res;
    }
}

const nums = [1,2,4,6]

const obj = new Solution();
console.log(obj.productExceptSelf(nums));
