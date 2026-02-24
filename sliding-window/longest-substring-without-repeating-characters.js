// Problem: Longest Substring Without Repeating Characters
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/longest-substring-without-duplicates/question?list=neetcode150

// Problem Statement:
// Given a string s, find the length of the longest substring without duplicate characters.
// A substring is a contiguous sequence of characters within a string.

// // Approach:
// I used the sliding window technique to solve this problem. I initialized two pointers, left and right, to represent the current window of characters being considered. I also used a map to keep track of the last index of each character in the current window. As I iterated through the string with the right pointer, I checked if the current character already exists in the map. If it does, it means that there is a duplicate character in the current window, so I moved the left pointer to one position after the last index of that character to ensure that the substring remains unique. I then updated the map with the current character and its index. After each iteration, I calculated the length of the current window (right - left) and updated the maximum length if necessary. Finally, I returned the maximum length of the substring without repeating characters.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the string once.
// - Space Complexity: O(min(m,n)) -> m is the size of the character set.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        const map = new Map();
        while(right <= s.length - 1){
            if(map.has(s[right])){
                console.log(map.get(s[right]), "jubilee");
                left = Math.max(left, map.get(s[right])+ 1)
            }
            map.set(s[right], right)
            right++
            maxLength = Math.max(maxLength, (right - left))
        }

        return maxLength;
    }
}

const s = " "
// output = 3

const obj = new Solution()
console.log(obj.lengthOfLongestSubstring(s));


