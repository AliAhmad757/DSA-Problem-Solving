// Problem: Valid Anagram
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/is-anagram/question?list=neetcode150

// Problem Statement:
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Approach:
// I used a javascript set (HashSet) which allows O(1) lookups. 
// If the length of the s string is different from the t string it means it can't be an anagram.
// I Created two Objects and store with respect to each strings, for each characters count, and then in last i checked is both having same values with respect to thier keys/character, if no return false otherwise true.
// OR: We can iterate and check set.has().

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the string exactly once.
// - Space Complexity: O(n) -> In the worst case, we store all elements in the hash map.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sObject = {}
        const tObject = {}

        for (const element of s) {
            if(element in sObject){
                sObject[element]++
            }else{
                sObject[element] = 1
            }
        }

        for (const element of t) {
            if(element in tObject){
                tObject[element]++
            }else{
                tObject[element] = 1
            }
        }

        if(Object.keys(sObject).length !== Object.keys(tObject).length){
            return false
        }

        for (const key in sObject) {
        if(sObject[key] !== tObject[key]){
            return false
        }       
        }

        return true 
    }
}


const s = "a", t = "ab"

const obj = new Solution()
console.log(obj.isAnagram(s, t));

