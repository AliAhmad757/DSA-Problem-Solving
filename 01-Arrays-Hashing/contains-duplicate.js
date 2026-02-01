// Problem: Contains Duplicate
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/duplicate-integer/question?list=neetcode150

// Problem Statement:
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Approach:
// I used an Object to store the numbers and their indices. 
// As we iterate through the array, we check if element exists in the object.
// If it exists, we found that this is duplicated. If not, and we iterate all the elements we'll return false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the list exactly once.
// - Space Complexity: O(n) -> In the worst case, we store all elements in the hash map.

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = {}
        for (let i = 1; i <= nums.length; i++) {
            const element = nums[i - 1];
            if(set[element]){
                return true
            }else{
                set[element] = i
            }
        }
      return false      
    }
}

const nums = [1, 2, 3, 4, 3]

const obj = new Solution()
console.log(obj.hasDuplicate(nums));


