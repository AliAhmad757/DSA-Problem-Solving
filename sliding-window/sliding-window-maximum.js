// Problem: Sliding Window Maximum
// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/sliding-window-maximum/question?list=neetcode150

// Problem Statement:
// You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.
// Return a list that contains the maximum element in the window at each step.

// Approach:
// We can use a deque (double-ended queue) to keep track of the indices of the elements in the current sliding window. The deque will maintain the indices in decreasing order of their corresponding values in the input array. This way, the front of the deque will always represent the index of the maximum element in the current window.
// As we iterate through the input array, we will do the following:
// 1. Remove indices from the back of the deque while the corresponding values are less than or equal to the current element. This ensures that the deque only contains indices of elements that are greater than the current element.
// 2. Add the current index to the back of the deque.
// 3. Remove the front index of the deque if it is out of the bounds of the current sliding window (i.e., if it is less than or equal to i - k).
// 4. If we have processed at least k elements (i.e., i >= k - 1), we can add the value corresponding to the front index of the deque to our result list, as it represents the maximum element in the current window.

// Complexity Analysis:
// - Time Complexity: O(n), where n is the length of the input array. Each element is added and removed from the deque at most once.
// - Space Complexity: O(k), where k is the size of the sliding window, as the deque can hold at most k indices.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = []; 

        for (let i = 0; i < nums.length; i++) {
            
            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }

            deque.push(i);

            if (deque[0] <= i - k) {
                deque.shift();
            }

            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}


const nums = [1,-1], k = 1

const obj = new Solution()
console.log(obj.maxSlidingWindow(nums, k));


