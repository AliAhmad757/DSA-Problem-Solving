// Problem: Group Anagrams
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/anagram-groups/question?list=neetcode150

// Problem Statement:
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Approach:
// Firstly i tried to think how we can check which is grouped with another str, so just sorted it out to make it normalize then for each values store multiple values.

// Complexity Analysis:
// - Time Complexity: O(m*nlogn) -> We iterate through the nums exactly once.
// - Space Complexity: O(m*n) -> We use space to store every nums number in the objects.

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const sortedElements = strs.map(word => {
            return word
                .split('')    // 1. Convert string to array of characters: ["p", "o", "t", "s"]
                .sort()       // 2. Sort the array: ["o", "p", "s", "t"]
                .join('');    // 3. Join back into a string: "opst"
        });

        const hashMap = new Map()
        for (let i = 0; i < sortedElements.length; i++) {
            const element = sortedElements[i];
            if(hashMap.has(element)){
                console.log( hashMap.get(element),"hashMap.get(element)");
                hashMap.get(element).push(strs[i])
            }else{
                hashMap.set(element, [strs[i]])
            }
        }

        const values = [...hashMap.values()];

        return values
    }
}


const strs = ["act","pots","tops","cat","stop","hat"]

const obj = new Solution();
console.log(obj.groupAnagrams(strs));
