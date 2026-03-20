// Problem: Is Subsequence
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/is-subsequence/question?list=neetcode150

// Problem Statement:
// You are given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Approach:
// I used a two-pointer approach to solve this problem. I initialized two pointers, l and r, to the start and end of the string t, respectively. I iterated through the string t from both ends towards the center. If the character at pointer l matches the first character of s, I removed that character from s. Similarly, if the character at pointer r matches the last character of s, I removed that character from s. I continued this process until the pointers crossed each other. Finally, if s is empty, it means all characters of s were found in t in the correct order, and I returned true; otherwise, I returned false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the string t at most once.
// - Space Complexity: O(1) -> We use constant space to store the modified string s.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let l = 0;
        let r = t.length - 1;

        while (l <= r) {
            if(t[l] === s[0]){
                s = s.slice(1);
            }

            if(t[r] === s[s.length - 1]){
                s = s.slice(0, -1);
            }

            l++
            r--
        }

        return s.length === 0
    }
}


let s = "node", t = "neetcode"

const obj = new Solution();
console.log(obj.isSubsequence(s, t));
