// Problem: Maximum Ascending Subarray Sum
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/maximum-ascending-subarray-sum/question?list=allNC

// Problem Statement:
// You are given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
// Note: An array is said to be strictly increasing if each element is strictly greater than its previous one (if exists).

// Approach:
// We can iterate through the nums from start to end and can have two variables one for tracking maximum sum and one for consecutive sum in the end of consecutive we'll check if it will be more than maximumSum we'll update maximumSum.

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the nums, since we may need to iterate through the entire nums in the worst case.
// - Space Complexity: O(1) since we are using only a constant amount of extra space for the consecutive sum and maximum sum.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = 0;
        let sum=0
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if(element > nums[i-1]){
                sum += element;
            }else{
             sum = element
            }
            console.log(element, maxSum, sum, "element");
            maxSum = Math.max(maxSum, sum)
        }

        return maxSum
    }
}


const nums = [10,20,30,1,40,50]

const obj = new Solution()
console.log(obj.maxAscendingSum(nums));


