// Problem: Length of Last Word
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/length-of-last-word/question?list=neetcode150

// Problem Statement:
// You are given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Note: A substring is a contiguous non-empty sequence of characters within a string.

// Approach:
// We can iterate through the string from the end to the beginning, counting the length of the last word until we encounter a space. If we encounter a space after counting some characters, we can return the length. If we reach the beginning of the string without encountering a space, we return the length of the last word.

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the string, since we may need to iterate through the entire string in the worst case.
// - Space Complexity: O(1) since we are using only a constant amount of extra space for the counter and flag.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let length = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== " ") {
                length++;
            } else if (length > 0) {
                return length;
            }
        }

        return length;
    }
}


const s = "   fly me   to   the moon  "

const obj = new Solution()
console.log(obj.lengthOfLastWord(s));


