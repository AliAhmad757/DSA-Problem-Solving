// Problem: Maximum Difference Between Even and Odd Frequency I
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/maximum-difference-between-even-and-odd-frequency-i/question?list=neetcode150

// Problem Statement:
// You are given a string s consisting of lowercase English letters.

// Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.

// Approach:
// We can use a hash map to count the frequency of each character in the string. Then, we can iterate through the hash map to find the maximum odd frequency and the minimum even frequency. Finally, we can return the difference between these two frequencies.   

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the string, since we need to iterate through the string to count the frequencies and then iterate through the hash map to find the maximum odd frequency and minimum even frequency.
// - Space Complexity: O(1) since there are only 26 lowercase English letters, the hash map will have a constant number of entries.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const hashMap = new Map()
        for (const element of s) {
            if(hashMap.has(element)){
                hashMap.set(element, (1 + (hashMap.get(element) || 0)))
            }else{
                hashMap.set(element, 1)
            }
        }

        let maximumOddFreq = 0;
        let maxiumEvenFreq = 0;

        for (const [key, value] of hashMap) {
            if(value % 2 !== 0){
                maximumOddFreq = Math.max(maximumOddFreq, value)
            }else{
                maxiumEvenFreq = maxiumEvenFreq === 0 ? value : Math.min(maxiumEvenFreq, value)
            }
        }

        return maximumOddFreq - maxiumEvenFreq
    }
}


const s = "aaaaabbc"

// Output: 3

const obj = new Solution()
console.log(obj.maxDifference(s));


