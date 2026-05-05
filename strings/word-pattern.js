// Problem: Word Pattern
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/word-pattern/question?list=neetcode150

// Problem Statement:
// You are given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Approach:
// We can use two hash maps (or dictionaries) to keep track of the mappings from pattern to words and from words to pattern. We first split the input string s into an array of words. Then, we check if the length of the pattern matches the number of words. If they don't match, we can immediately return false. Next, we iterate through both the pattern and the array of words simultaneously. For each character in the pattern and its corresponding word, we check if there is an existing mapping in either hash map. If there is a mapping, we verify that it is consistent with the current character and word. If there is no mapping, we create a new mapping in both hash maps. If at any point we find an inconsistency in the mappings, we return false. If we successfully iterate through both the pattern and the words without inconsistencies, we return true.

// Complexity Analysis:
// - Time Complexity: O(n + m) where n is the length of the pattern (or the number of words), and m is the total number of characters in the string s, since we may need to iterate through both the pattern and the words in the worst case.
// - Space Complexity: O(n) in the worst case, if all characters in the pattern and all words in s are unique, we will store all of them in the hash maps.

class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const words = s.split(" ")
        const hashMap = new Map();
        const hashMapWord = new Map();


        if(pattern.length !== words.length){
            return false
        }

        for (let i = 0; i < pattern.length; i++) {
            const wordElement = words[i];
            const patternElement = pattern[i];

            if(hashMap.has(patternElement)){
                if(hashMap.get(patternElement) !== wordElement){
                    return false
                }
            }else{
                if(hashMapWord.has(wordElement)){
                    return false
                }

                hashMapWord.set(wordElement, patternElement)

                hashMap.set(patternElement, wordElement)
            }
        }

        return true
    }
}


const pattern="abc" , s="dog cat cat"

const obj = new Solution()
console.log(obj.wordPattern(pattern, s));


