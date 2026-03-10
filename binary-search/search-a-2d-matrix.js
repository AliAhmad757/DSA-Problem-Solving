// Problem: Search a 2D Matrix
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/search-2d-matrix/question?list=neetcode150

// Problem Statement:
// You are given an m x n 2-D integer array matrix and an integer target.
// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.
// Can you write a solution that runs in O(log(m * n)) time?

// // Approach:
// I used a two-step binary search approach to solve this problem. First, I performed a binary search on the rows of the matrix to find the potential row that could contain the target. I compared the target with the first and last elements of the middle row to determine if the target is less than, greater than, or within that row. If the target is less than the first element of the middle row, I moved the search to the upper half of the rows. If it is greater than the last element of the middle row, I moved the search to the lower half of the rows. If it is within that row, I stored that row index for further searching.

// After identifying the potential row, I performed a second binary search on that specific row to find the target. I compared the target with the middle element of the row and adjusted the search range accordingly until I found the target or exhausted the search space.

// Complexity Analysis:
// - Time Complexity: O(log(m * n)) -> We are performing a binary search on a 2D matrix, which can be treated as a 1D array of size m*n.
// - Space Complexity: O(1) -> We only use a constant amount of extra space for variables, regardless of the input size.

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {number}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bottom = matrix.length - 1;
        let cols = matrix[0].length;
        let findIndex = -1;

    while (top <= bottom) {
        let midRow = Math.floor((top + bottom) / 2);
        
        // Agar target is row ke aakhri element se bada hai, to niche wali rows me jao
        if (target > matrix[midRow][cols - 1]) {
            top = midRow + 1;
        } 
        // Agar target is row ke pehle element se chota hai, to upar wali rows me jao
        else if (target < matrix[midRow][0]) {
            bottom = midRow - 1;
        } 
        // Target is row ki range me (first aur last element ke darmiyan) mil gaya
        else {
            findIndex = midRow;
            break;
        }
    }

    // Edge case handle karna zaruri hai: aghr target matrix ki puri range se hi bahar ho
    if (findIndex === -1) {
        return false; // Target matrix me exist nahi karta
    }

    const checkArray = matrix[findIndex];
        let low = 0;
        let high = checkArray.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if(checkArray[mid] === target){
                return true
            }
            else if(checkArray[mid] < target){
                low = mid + 1
            }else{
                high  = mid - 1
            }
        }
        
        // Agar target matrix ke sab elements se bada ho
        return false;
    }
}



const matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
// output = 3

const obj = new Solution()
console.log(obj.searchMatrix(matrix, target));


