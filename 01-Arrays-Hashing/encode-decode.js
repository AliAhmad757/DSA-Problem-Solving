// Problem: Encode and Decode Strings

// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/string-encode-and-decode/question

// Problem Statement:
// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Approach:
// We encode each string by prefixing it with its length and a delimiter '#'. This allows us to decode the string unambiguously by reading the length first and then extracting the string of that length.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(m+n) -> We use space to store every nums number in the objects.

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = []; 
        for (let s of strs) {
            res.push(`${s.length}#${s}`);
        }
        return res.join('');
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    /**
 * @param {string} str
 * @returns {string[]}
 */
    decode(str) {
        let arr = [];
        let i = 0;

        while (i < str.length) {
            let j = str.indexOf('#', i);
            
            let elementLength = Number(str.slice(i, j));
            
            const element = str.slice(j + 1, j + 1 + elementLength);
            
            arr.push(element);
            
            i = j + 1 + elementLength;
        }
        
        return arr;
    }
}

const dummy_input = ["Hello i'm ali ahmad","World"]


const obj = new Solution();
const encodedStr = obj.encode(dummy_input)
const decodedStr = obj.decode(encodedStr)

console.log( decodedStr);
