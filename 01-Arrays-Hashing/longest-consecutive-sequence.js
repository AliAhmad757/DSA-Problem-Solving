// Problem: Longest Consecutive Sequence
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/longest-consecutive-sequence/question?list=neetcode150

// Problem Statement:
// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
// You must write an algorithm that runs in O(n) time.

// Approach:
// I used a Set to store the unique elements from the input array for O(1) lookups. Then, I iterated through each number in the Set and checked if it is the start of a sequence (i.e., if num - 1 is not in the Set). If it is the start of a sequence, I then counted how long the sequence is by checking for consecutive numbers (num + length) until I find a number that is not in the Set. I kept track of the longest sequence length found during this process.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums array once to create the Set, and then we iterate through the Set once. Each lookup in the Set is O(1), so the overall time complexity is O(n).
// - Space Complexity: O(n) ->  we store all unique elements in the Set.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

const nums = [2,20,4,10,3,4,5]

const obj = new Solution();
console.log(obj.longestConsecutive(nums));
