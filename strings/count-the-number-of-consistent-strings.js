// Problem: Count the Number of Consistent Strings
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/count-the-number-of-consistent-strings/question?list=neetcode150

// Problem Statement:
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Approach:
// We can use a hashMap to store the allowed characters and then we can iterate through the words array and check if all the characters in the word are present in the hashMap. If they are, we can increment the consistent count. 

// Complexity Analysis:
// - Time Complexity: O(n * m) where n is the length of the words array and m is the average length of the strings in the words array.
// - Space Complexity: O(k) where k is the length of the allowed string.

class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        let hashMap = new Map()
        let consistent = 0;
        for (const element of allowed) {
            hashMap.set(element, "true")
        }

        for (let i = 0; i < words.length; i++) {
            let exist = 0
            for (const element of words[i]) {
                if(!hashMap.has(element)){
                    break
                }
                exist++
            }

            if(exist === words[i].length){
                consistent++
            }
        }

        return consistent;
    }
}


const allowed = "ab", words = ["ad","bd","aaab","baa","badab"]

const obj = new Solution()
console.log(obj.countConsistentStrings(allowed, words));


