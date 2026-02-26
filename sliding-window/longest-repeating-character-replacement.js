// Problem: Longest Repeating Character Replacement
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/longest-repeating-substring-with-replacement/question?list=neetcode150

// Problem Statement:
// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// // Approach:
// I used the sliding window technique to solve this problem. I initialized two pointers, left and right, to represent the current window of characters being considered. I also used a map to keep track of the frequency of each character in the current window. As I iterated through the string with the right pointer, I updated the frequency of the current character in the map and kept track of the maximum frequency of any character in the current window. If the length of the current window minus the maximum frequency is greater than k, it means that we need to shrink the window from the left until we have at most k characters that can be replaced. After each iteration, I calculated the length of the current window (right - left + 1) and updated the maximum length if necessary. Finally, I returned the maximum length of the substring that can be formed by replacing at most k characters.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the string once.
// - Space Complexity: O(1) -> We only use a constant amount of extra space for the map, as there are only 26 uppercase English characters.

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;
        const map = new Map();

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];
            map.set(rightChar, (map.get(rightChar) || 0) + 1)

            console.log(map);
            maxFreq = Math.max(maxFreq, map.get(rightChar))

            while((right - left + 1) - maxFreq > k){
                console.log("k?");
                   let leftChar = s[left]
                    map.set(leftChar, (map.get(leftChar) - 1) || 0)
                    left++
            }
            
            maxLength = Math.max(maxLength, (right - left + 1))  
        }

        return maxLength
    }
}


const s = "ABAB", k = 1
// Output: 4


const obj = new Solution()
console.log(obj.characterReplacement(s, k));


