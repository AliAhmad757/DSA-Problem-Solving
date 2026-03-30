// Problem: Isomorphic Strings
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/isomorphic-strings/question?list=neetcode150

// Problem Statement:
// You are given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Approach:
// We can use two hash maps (or dictionaries) to keep track of the character mappings from s to t and from t to s. As we iterate through both strings simultaneously, we check if the current characters in s and t have been previously mapped. If they have been mapped, we verify that the mapping is consistent. If not, we create a new mapping. If at any point we find an inconsistency in the mappings, we return false. If we successfully iterate through both strings without inconsistencies, we return true.

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the string, since we may need to iterate through the entire string in the worst case.
// - Space Complexity: O(1) since we are using only a constant amount of extra space for the counter and flag.


class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if (s.length !== t.length) return false;

        const mapS = new Map(); 
        const mapT = new Map(); 

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];

            if (mapS.has(charS) && mapS.get(charS) !== charT) {
                return false; 
            }

            if (mapT.has(charT) && mapT.get(charT) !== charS) {
                return false; 
            }

            mapS.set(charS, charT);
            mapT.set(charT, charS);
        }

        return true;
    }
}

const s = "foo", t = "bar"

const obj = new Solution()
console.log(obj.isIsomorphic(s, t));


