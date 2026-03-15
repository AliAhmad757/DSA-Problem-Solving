// Problem: String Matching in an Array

// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/string-matching-in-an-array/question

// Problem Statement:
// You are given an array of string words, return all strings in words that are a substring of another word. You can return the answer in any order.
// Note: A substring is a contiguous non-empty sequence of characters within a string.


// Approach:
// We can sort the array of words by their lengths in ascending order. Then, we can iterate through the sorted array and for each word, check if it is a substring of any of the longer words that come after it in the sorted list. If it is, we add it to our result list. 

// Complexity Analysis:
// - Time Complexity: O(N^2 * M), where N is the total number of words in the array and M is the maximum length of a word. 
//   1. Sorting the array takes O(N * log N * M) time.
//   2. The nested loops compare each pair of words, which takes O(N^2) iterations.
//   3. Inside the loop, the .includes() method takes O(M) time for string matching. 
//   Overall, the nested loops dominate, resulting in O(N^2 * M) time.

// - Space Complexity: O(N) or O(log N) auxiliary space. The JavaScript engine's internal sorting algorithm (like Timsort in V8) requires some extra space. Excluding the space used by the output array `res`, the auxiliary space is bounded by the sorting mechanism.

class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let res = [];
        words.sort((a, b) => a.length - b.length);

        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                console.log(i, j,"ceck?");
                if (words[j].includes(words[i])) {
                    res.push(words[i]);
                    break;
                }
            }
        }

        return res;
    }
}

const words = ["mass","as","hero","superhero"]
// output = ["as","hero"]

const obj = new Solution();
console.log(obj.stringMatching(words));