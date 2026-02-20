// Problem: Container With Most Water

// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/max-water-container/question?list=neetcode150

// Problem Statement:
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49 
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
// Explanation: The above vertical lines are represented by array [1,1]. In this case, the max area of water (blue section) the container can contain is 1.

// Approach:
// We can use two pointers to solve this problem. We start with one pointer at the beginning of the array and another pointer at the end of the array. We calculate the area formed by the lines at these two pointers and update the maximum area if necessary. Then, we move the pointer that has the smaller height towards the other pointer, because moving the taller pointer will not increase the area.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the heights array exactly once.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let maxArea = 0;
      let l = 0;
      let r = heights.length - 1;

      while(l < r){
        let width  = r - l
        let length = Math.min(heights[l], heights[r]);
        maxArea = Math.max(maxArea, width * length);

        if(heights[l] < heights[r]){
          l++
        }else{
          r--
        }
      }

      return maxArea;
    }
}


const height = [1,7,2,5,4,7,3,6]
// Output: 36


const obj = new Solution();

console.log(obj.maxArea(height));
