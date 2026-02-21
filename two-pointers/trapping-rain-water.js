// Problem: Trapping Rain Water

// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/trapping-rain-water/question

// Problem Statement:
// You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
// Return the maximum area of water that can be trapped between the bars.

// Example 1:
// Input: height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9
// Explanation: The above elevation map (black section) is represented by array [0,2,0,3,1,0,1,3,2,1]. In this case, 9 units of rain water (blue section) are being trapped between the bars.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9
// Explanation: The above elevation map (black section) is represented by array [4,2,0,3,2,5]. In this case, 9 units of rain water (blue section) are being trapped between the bars.

// Approach:

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the heights array exactly once.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
     let water= 0;
     let l = 0;
     let r = height.length - 1;

     let left_max = 0;
     let right_max = 0;
     
     while(l < r){
        if(height[l] < height[r]){
            left_max = Math.max(left_max, height[l])
            water += left_max - height[l]
            console.log(left_max, water, "check Left");
            l++
        }else{
            right_max = Math.max(right_max, height[r])
            water += right_max - height[r]
            console.log(right_max, water, "check right");

            r--
        }
     }

     return water;
    }
}



const height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9


const obj = new Solution();

console.log(obj.trap(height));
