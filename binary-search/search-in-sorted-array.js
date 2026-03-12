// Problem: Search in Rotated Sorted Array
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/find-target-in-rotated-sorted-array/question?list=neetcode150

// Problem Statement:
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.
// You may assume all elements in the sorted rotated array nums are unique,
// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// // Approach:
// If the array was not rotated, we could simply perform a binary search to find the target. However, since the array is rotated, we need to determine which part of the array is sorted and whether the target lies within that part. We can do this by comparing the middle element with the leftmost element. If the middle element is greater than or equal to the leftmost element, it means that the left half of the array is sorted. Otherwise, the right half is sorted. Based on this information, we can adjust our search range accordingly.

// Complexity Analysis:
// - Time Complexity: O(log n), where n is the number of elements in the input array. This is because we are performing a binary search, which divides the search space in half at each step.
// - Space Complexity: O(1), since we are using only a constant amount of extra space for the pointers and variables.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) {
                return mid;
            }

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
    }
}

const nums=[3,5,6,0,1,2], target =  4

const obj = new Solution()
console.log(obj.search(nums, target));


