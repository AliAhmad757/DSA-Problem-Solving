// Problem: Valid Anagram
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/is-anagram/question?list=neetcode150

// Problem Statement:
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Approach:
// 1. First, check if the lengths of both strings are different. If they are, they cannot be anagrams (return false).
// 2. I used two Objects (Hash Maps) to act as "Frequency Counters".
// 3. I iterated through both strings to count the occurrence of each character.
// 4. Finally, I compared the character counts in both maps. If any character count does not match, return false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the strings and the map keys exactly once.
// - Space Complexity: O(n) -> We use auxiliary space to store character counts in the objects.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Optimization: Length check at the start
        if (s.length !== t.length) return false;

        const sCount = {};
        const tCount = {};

        for (const char of s) {
            sCount[char] = (sCount[char] || 0) + 1;
        }

        for (const char of t) {
            tCount[char] = (tCount[char] || 0) + 1;
        }

        // Compare the counts
        for (const key in sCount) {
            if (sCount[key] !== tCount[key]) {
                return false;
            }
        }

        return true; 
    }
}

const s = "a", t = "ab"

const obj = new Solution()
console.log(obj.isAnagram(s, t));

