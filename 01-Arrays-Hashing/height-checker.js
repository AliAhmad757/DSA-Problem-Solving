// Problem: Height Checker

// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/height-checker/question?list=neetcode150

// Problem Statement:
// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the i-th student in line.
// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the i-th student in line (0-indexed).
// Return the number of indices where heights[i] != expected[i].

// Approach:
// We can use a frequency array to count the occurrences of each height. We then iterate through the heights array and compare each height with the expected height based on the frequency array. If there is a mismatch, we increment the count of mismatches. Finally, we return the total count of mismatches.


// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the heights array exactly once.
// - Space Complexity: O(1) -> We use a fixed-size frequency array of length 101, which is constant space.

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const freq = new Array(101).fill(0);
        
        for (let i = 0; i < heights.length; i++) {
            freq[heights[i]]++;
        }

        let count = 0;
        let expected_h = 1; 

        for (let i = 0; i < heights.length; i++) {
            
            while (freq[expected_h] === 0) {
                expected_h++;
            }

            if (heights[i] !== expected_h) {
                count++; 
            }

            freq[expected_h]--;
        }

        return count;
    }
}


const heights = [1,2, 4, 3, 5]


const obj = new Solution();
console.log(obj.heightChecker(heights));
