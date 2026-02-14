// Problem: Valid Palindrome
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/is-palindrome/question

// Problem Statement:
// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).


// Approach:
// I created a helper function isAlphaNumeric that removes all non-alphanumeric characters from the input string and converts it to lowercase.
// Then, I iterated through the cleaned string from both ends towards the center, comparing characters at corresponding positions. 
// If any characters do not match, I returned false. If the loop completes without finding any mismatches, I returned true.

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the string twice (once for cleaning and once for checking), resulting in O(n) time complexity.
// - Space Complexity: O(n) -> We create a new string to store the cleaned version of the input, which can take up to O(n) space in the worst case.
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumerice(str){
        return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
    isPalindrome(s) {
        const alphaString = this.isAlphaNumerice(s)
        for (let i = 0; i < alphaString.length / 2; i++) {
            const fromStart = alphaString[i];
            const fromEnd = alphaString[alphaString?.length - i - 1];
            if(fromStart !== fromEnd){
                return false
            }
        }
        return true
    }
}


const s = "Was it a car or a cat I saw?"

const obj = new Solution()
console.log(obj.isPalindrome(s));

console.log("9".charCodeAt());

