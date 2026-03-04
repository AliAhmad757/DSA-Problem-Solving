// Problem: Replace Elements With Greatest Element On Right Side
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/replace-elements-with-greatest-element-on-right-side/question?list=neetcode150

// Problem Statement:
// You are given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

// Approach:
// I initialized a variable maxRightVal to -1, which will keep track of the greatest element to the right of the current element.
// I iterated through the array from right to left, and for each element, I replaced it with maxRightVal and then updated maxRightVal to be the maximum of the current element and maxRightVal.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the arr exactly once.
// - Space Complexity: O(1) -> We use constant space to store the maxRightVal variable.

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
     let maxRightVal = -1;
     for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        arr[i] = maxRightVal
        maxRightVal = Math.max(element, maxRightVal)
     }

     return arr
    }
}


const arr = [2,4,5,3,1,2]

const obj = new Solution();
console.log(obj.replaceElements(arr));
