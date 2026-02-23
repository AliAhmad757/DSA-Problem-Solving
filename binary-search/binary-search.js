// Problem: Binary Search
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/binary-search/question?list=neetcode150

// Problem Statement:
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
// Your solution must run in O (log n) O (logn) time.

// // Approach:
// I used the binary search algorithm to solve this problem. I initialized two pointers, low and high, to represent the current search range within the nums array. I calculated the middle index (mid) of the current search range and compared the value at that index with the target. If they are equal, I returned the mid index as the result. If the value at mid is less than the target, it means that the target must be in the right half of the current search range, so I moved the low pointer to mid + 1. Otherwise, if the value at mid is greater than the target, it means that the target must be in the left half of the current search range, so I moved the high pointer to mid - 1. I continued this process until low exceeds high, which means that the target is not present in the array, and I returned -1.

// Complexity Analysis:
// - Time Complexity: O(log n) -> We divide the search space in half at each step.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if(nums[mid] === target){
                return mid
            }
            else if(nums[mid] < target){
                low = mid + 1
            }else{
                high  = mid - 1
            }
        }
        return -1;
    }
}


const nums =  [-1,0,2,4,6,8], target = 8
// output = 3

const obj = new Solution()
console.log(obj.search(nums, target));


