// Problem: Score of a String
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/score-of-a-string/question?list=allNC

// Problem Statement:
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.s
// Return the score of s.

// Approach:
// I initialized a variable absoluteValue to store the cumulative score. I then iterated through the string from the first character to the second-to-last character. For each pair of adjacent characters, I calculated the ASCII values using charCodeAt and added the absolute difference to absoluteValue. Finally, I returned the total score after processing all adjacent pairs of characters in the string.

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the list exactly once.
// - Space Complexity: O(1) -> We only use a constant amount of space to store the absolute value.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let absoluteValue = 0;
        for (let i = 0; i < s.length - 1; i++) {
            const charCodeLeft = s[i].charCodeAt(0);
            const charCodeRight = s[i + 1].charCodeAt(0);

            absoluteValue += Math.abs(charCodeRight - charCodeLeft)
        }

        return absoluteValue
    }
}


const s = "code"

const obj = new Solution()
console.log(obj.scoreOfString(s));


