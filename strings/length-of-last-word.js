// Problem: Length of Last Word
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/length-of-last-word/question?list=neetcode150

// Problem Statement:
// You are given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Note: A substring is a contiguous non-empty sequence of characters within a string.

// Approach:
// We can iterate through the string from the end to the beginning, counting the characters of the last word until we encounter a space. We also need to handle cases where there are trailing spaces at the end of the string. We can use a flag to indicate when we have found the last word and a counter to count its length. Once we encounter a space after finding the last word, we can return the count.

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the string s, as we need to iterate through the string once.
// - Space Complexity: O(1) as we are using a constant amount of space to store the character count and flags.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let charFound = false
        let charCount = 0

        for (let i = s.length - 1; i >= 0; i--) {
            const element = s[i];
            if(element === " " && charFound){
                return s.length - 1 - i - charCount
            }else if(element === " "){
                charCount++
            }else if(element !== ""){
                charFound = true
            }
        }

        return s.length
    }
}


const s = "   fly me   to   the moon  "

const obj = new Solution()
console.log(obj.lengthOfLastWord(s));


