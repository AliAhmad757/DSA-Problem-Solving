// Problem: Pascal's Triangle
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/pascals-triangle/question?list=neetcode150

// Problem Statement:
// You are given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Approach:
// I created a result array to store the rows of Pascal's triangle. For each row, I initialized an array of size i + 1 with all elements set to 1 (since the first and last elements of each row are always 1). Then, I iterated through the elements of the current row (starting from index 1 to i - 1) and updated each element by summing the two elements directly above it from the previous row (res[i-1][j-1] and res[i-1][j]). Finally, I pushed the current row into the result array.

// Complexity Analysis:
// - Time Complexity: O(n^2) -> We iterate through each row and each element within the row.
// - Space Complexity: O(n^2) -> We store the entire Pascal's triangle up to numRows in the result array.


class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let res = []
        for (let i = 0; i < numRows; i++) {
            const items = new Array(i + 1).fill(1);

            for (let j = 1; j < i; j++) {
                items[j] = res[i-1][j-1] + res[i-1][j]          
            }

            res.push(items)
        }

        return res
    }
}


let numRows = 5


const obj = new Solution();
console.log(obj.generate(numRows));