// Problem: Contains Duplicate II
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/contains-duplicate-ii/question?list=neetcode150

// Problem Statement:
// You are given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k, otherwise return false.

// Approach:
// I used a sliding window approach to solve this problem. I initialized two pointers, i and j, to represent the current window of indices being considered. I also used a hash map to keep track of the last index of each number in the current window. As I iterated through the array with the right pointer j, I checked if the current number nums[j] already exists in the hash map. If it does, I calculated the absolute difference between the current index j and the last index of that number stored in the hash map. If this difference is less than or equal to k, it means we have found two distinct indices i and j such that nums[i] == nums[j] and abs(i - j) <= k, so I returned true. If not, I updated the hash map with the current index j for that number. After iterating through the array, if no such pair of indices is found, I returned false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the array once.
// - Space Complexity: O(n) -> In the worst case, we may store all numbers in the hash map if they are all distinct.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let i = 0;
        let j = 0;
        let hashMap = {}
        let result = Infinity;

        while (j < nums.length) {
            if(hashMap[nums[j]] !== undefined){
                i = hashMap[nums[j]]
                result = Math.min(Math.abs(i-j), result);
                if(result <= k){
                    return true
                }
            }
            hashMap[nums[j]] = j;

            j++
        }

        return result <= k
    }
}


const obj = new Solution()
console.log(obj.containsNearbyDuplicate(nums, k));


