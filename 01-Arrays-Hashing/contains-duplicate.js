// Problem: Contains Duplicate
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/duplicate-integer/question?list=neetcode150

// Problem Statement:
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Approach:
// I used a javascript set (HashSet) which allows O(1) lookups. 
// If the size of the set is different from the array length, it means the duplicate exists.
// OR: We can iterate and check set.has().

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the list exactly once.
// - Space Complexity: O(n) -> In the worst case, we store all elements in the hash map.

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length
    }
}

const nums = [1, 2, 3, 4, 4]

const obj = new Solution()
console.log(obj.hasDuplicate(nums));


