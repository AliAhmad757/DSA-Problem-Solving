// Problem: Sliding Window Maximum
// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/sliding-window-maximum/question?list=neetcode150

// Problem Statement:
// You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.
// Return a list that contains the maximum element in the window at each step.

// Approach:
// We can use a brute-force approach to solve this problem. We can iterate through the array and for each position of the sliding window, we can find the maximum element in that window by iterating through the elements in the window and keeping track of the maximum value. We can then add this maximum value to our result list. This approach will have a time complexity of O(n*k) where n is the length of the input array and k is the size of the sliding window.

// Complexity Analysis:
// - Time Complexity: O(n*k) where n is the length of the input array and k is the size of the sliding window. This is because for each of the n-k+1 positions of the sliding window, we are iterating through k elements to find the maximum.
// - Space Complexity: O(1) since we are using only a constant amount of extra space for the variables to keep track of the maximum value and the result list does not count towards extra space as it is the output.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const sumArray = []
        for (let i = 0; i < (nums.length + 1) - k; i++) {
            let maxElement = nums[i];

            for (let j = i; j < i+k; j++) {
                const element = nums[j];
                maxElement = Math.max(element, maxElement)  
            }

            sumArray.push(maxElement)
        }

        return sumArray
    }
}



const nums = [1,-1], k = 1

const obj = new Solution()
console.log(obj.maxSlidingWindow(nums, k));


