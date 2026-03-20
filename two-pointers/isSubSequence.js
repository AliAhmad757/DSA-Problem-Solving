// Problem: Is Subsequence
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/is-subsequence/question?list=neetcode150

// Problem Statement:
// You are given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Approach:
// I used a two-pointer approach to solve this problem. I initialized two pointers, i and j, to keep track of the current index in strings s and t respectively. I iterated through both strings simultaneously, comparing the characters at the current indices. If the characters match, I moved the pointer i to the next character in string s. Regardless of whether there was a match or not, I moved the pointer j to the next character in string t. After the loop, if pointer i has reached the end of string s, it means that all characters of s were found in t in order, and I returned true. Otherwise, I returned false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the string t at most once.
// - Space Complexity: O(1) -> We use constant space to store the pointers and modify the string s in place.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0; 
        let j = 0; 

        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                i++; 
            }
            j++; 
        }

        return i === s.length;
    }
}


let s = "node", t = "neetcode"

const obj = new Solution();
console.log(obj.isSubsequence(s, t));
