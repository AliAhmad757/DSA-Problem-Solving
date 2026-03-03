// Problem: Concatenation of Array
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/concatenation-of-array/question

// Problem Statement:
// You are given an integer array nums of length n. Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.


// Approach:
// I copied all the elements into the result array then run loop for n times and push element one by one.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(n) -> We use space to store every nums number in the result array.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result =  [...nums];
        let length =  nums?.length;

        for (let i = 0; i < length; i++) {
            const element = nums[i];
            result.push(element)
        }

        return result
    }
}





let nums = [1,4,1,2]

const obj = new Solution();
console.log(obj.getConcatenation(nums));