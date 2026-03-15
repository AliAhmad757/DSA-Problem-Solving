// Problem: Longest Common Prefix

// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/longest-common-prefix/question

// Problem Statement:
// You are given an array of strings strs. Return the longest common prefix of all the strings.
// If there is no longest common prefix, return an empty string "".

// Approach:
// We can iterate through the characters of the first string and compare them with the corresponding characters of the other strings. If we find a mismatch or reach the end of any string, we return the common prefix found so far.   

// Complexity Analysis:
// - Time Complexity: O(m*n) -> We iterate through the characters of the first string and compare them with the corresponding characters of the other strings, where m is the length of the first string and n is the number of strings in the array.
// - Space Complexity: O(1) -> We use only a constant amount of extra space for the variables.

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }
        return strs[0];
    }
}

const strs = ["flower","flow","flight"]
// output = "fl"

const obj = new Solution();
console.log(obj.longestCommonPrefix(strs));