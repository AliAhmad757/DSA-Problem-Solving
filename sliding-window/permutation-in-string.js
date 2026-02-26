// Problem: Permutation in String
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/permutation-string/question?list=neetcode150

// Problem Statement:
// You are given two strings s1 and s2.
// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
// Both strings only contain lowercase letters.


// // Approach:
// I used the sliding window technique to solve this problem. I first created a frequency map for the characters in s1. Then, I initialized two pointers, left and right, to represent the current window of characters being considered in s2. As I iterated through s2 with the right pointer, I created a frequency map for the current window of characters. After each iteration, I compared the frequency map of the current window with the frequency map of s1. If they are equal, it means that a permutation of s1 exists as a substring of s2, so I returned true. If not, I moved the left pointer to shrink the window and continued iterating until the right pointer reaches the end of s2. If no permutation is found by the end of the iteration, I returned false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through s2 once, and comparing the frequency maps takes O(1) time since there are only 26 lowercase letters.
// - Space Complexity: O(1) -> We only use a constant amount of extra space for the frequency maps, as there are only 26 lowercase letters.

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map();
        for (let i = 0; i < s1.length; i++) {
            const element = s1[i];
            s1Map.set(element, (s1Map.get(element) || 0) + 1)
        }

        let left = 0;
        let right = s1.length - 1;

        while (right < s2.length) {
            const currentMap = new Map();
            for (let i = left; i <= right; i++) {
                const element = s2[i];
                currentMap.set(element, (currentMap.get(element) || 0) + 1)
            }

            console.log(currentMap, s1Map, "currentMap");
                        // 🔹 Compare after inner loop finishes
            let isEqual = true;

            if (currentMap.size !== s1Map.size) {
                isEqual = false;
            } else {
                for (let [key, value] of currentMap) {
                if (!s1Map.has(key) || s1Map.get(key) !== value) {
                    isEqual = false;
                    break;
                }
                }
            }

            if(isEqual){
                return true
            }

            left++
            right++
        }

        return false;
    }
}

const s1 = "abc", s2 = "lecaabee"
// output = 3

const obj = new Solution()
console.log(obj.checkInclusion(s1, s2));


