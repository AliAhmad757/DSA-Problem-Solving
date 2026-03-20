// Problem: Append Characters to String to Make Subsequence
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/append-characters-to-string-to-make-subsequence/question

// Problem Statement:
// You are given two strings s and t consisting of only lowercase English letters.
// Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.
// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// Approach:
// I used a two-pointer approach to solve this problem. I initialized two pointers, i and j, to keep track of the current index in strings t and s respectively. I iterated through both strings simultaneously, comparing the characters at the current indices. If the characters match, I moved the pointer i to the next character in string t. Regardless of whether there was a match or not, I moved the pointer j to the next character in string s. After the loop, if pointer i has reached the end of string t, it means that all characters of t were found in s in order, and I returned 0. Otherwise, I returned the number of remaining characters in t that were not found in s, which is calculated as t.length - i.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the string s at most once.
// - Space Complexity: O(1) -> We use constant space to store the pointers and modify the string t in place.


class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0; 
        let j = 0; 

        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                i++; 
            }
            j++; 
        }

        return t.length - i;
    }
}



let s = "coaching", t = "coding"

const obj = new Solution();
console.log(obj.appendCharacters(s, t));
