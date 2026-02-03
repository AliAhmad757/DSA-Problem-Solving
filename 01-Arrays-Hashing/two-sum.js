// Problem: Two Sum
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/two-integer-sum/question?list=neetcode150

// Problem Statement:
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

// Approach:
// Firstly i tried to think how we can get target, I've figured out by subtracting from target to i value if we found in our map it means we have find out the target based on next and stored map value.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(n) -> We use space to store every nums number in the objects.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if(map.has(target - element)){
                return[map.get(target - element), i]
            }else{
                map.set(element, i)
            }
        }
    }
}

let nums = [3,4,5,6], target = 7

const obj = new Solution();
console.log(obj.twoSum(nums, target));
