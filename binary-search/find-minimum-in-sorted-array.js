// Problem: Find Minimum in Rotated Sorted Array
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/find-minimum-in-rotated-sorted-array/question?list=neetcode150

// Problem Statement:
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.
// Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// // Approach:
// I used a binary search approach to solve this problem. The idea is to maintain two pointers, low and high, to represent the current search range within the nums array. I calculated the middle index (mid) of the current search range and compared the value at that index with the last element of the array. If the value at mid is greater than the last element, it means that the minimum element must be in the right half of the current search range, so I moved the low pointer to mid + 1. Otherwise, if the value at mid is less than or equal to the last element, it means that the minimum element must be in the left half of the current search range (including mid), so I moved the high pointer to mid. I continued this process until low is less than high, which means that low will eventually point to the minimum element in the array, and I returned nums[low].

// Complexity Analysis:
// - Time Complexity: O(log n) -> We divide the search space in half at each step.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length === 1){
            return nums[nums.length - 1]
        }

        let low = 0;
        let high = nums.length - 1;


        while (low < high ) {
            let mid = Math.floor((low + high) / 2);

            if(nums[mid] > nums[nums.length - 1]){
                low = mid + 1
            }else{
                high  = mid
            }
        }

        return nums[low] ;
    }
}

const nums=[3,4,5,6,1,2]
// output = 3

const obj = new Solution()
console.log(obj.findMin(nums));


