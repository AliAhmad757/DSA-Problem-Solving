// Problem: Largest Rectangle In Histogram
// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/largest-rectangle-in-histogram/question

// Problem Statement:
// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
// Return the area of the largest rectangle that can be formed among the bars.
// Note: This chart is known as a histogram.

// Approach:
// I used a stack-based approach to solve this problem. The idea is to maintain a stack of indices of the histogram bars. We iterate through the heights array, and for each bar, we check if it is taller than the bar at the top of the stack. If it is, we push its index onto the stack. If it is shorter, we pop indices from the stack until we find a bar that is shorter than the current bar. For each popped index, we calculate the area of the rectangle that can be formed with the height of the bar at that index and the width determined by the current index and the index of the new top of the stack. We also handle the case when we reach the end of the heights array, ensuring that we pop all remaining indices from the stack and calculate their areas.

// Complexity Analysis:
// - Time Complexity: O(n) -> Each bar is pushed and popped from the stack at most once.
// - Space Complexity: O(n) -> In the worst case, the stack can hold all indices of the histogram bars.

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    const n = heights.length;
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i <= n; i++) {
      while (
        stack.length &&
        (i === n || heights[stack[stack.length - 1]] >= heights[i])
      ) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
    return maxArea;
  }
}

const heights = [2, 4];

const obj = new Solution();
console.log(obj.largestRectangleArea(heights));
