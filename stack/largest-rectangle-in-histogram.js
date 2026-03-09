// Problem: Largest Rectangle In Histogram
// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/largest-rectangle-in-histogram/question

// Problem Statement:
// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
// Return the area of the largest rectangle that can be formed among the bars.
// Note: This chart is known as a histogram.

// Approach:
// I implemented a brute-force approach to solve the problem. For each bar in the histogram, I treated it as the potential height of a rectangle and then expanded to the left and right to find the maximum width of the rectangle that can be formed with that height. I used two while loops: one to move rightwards until I encounter a bar shorter than the current bar, and another to move leftwards until I encounter a bar shorter than the current bar. After finding the leftmost and rightmost boundaries for the current height, I calculated the area of the rectangle and updated the maximum area found so far.

// Complexity Analysis:
// - Time Complexity: O(n^2) -> In the worst case, we might have to check all bars for each bar to find the left and right boundaries, leading to O(n^2) time complexity.
// - Space Complexity: O(1) -> We are using a constant amount of extra space for variables, regardless of the input size.

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            let height = heights[i];

            let rightMost = i + 1;
            while (rightMost < n && heights[rightMost] >= height) {
                rightMost++;
            }

            let leftMost = i;
            while (leftMost >= 0 && heights[leftMost] >= height) {
                leftMost--;
            }

            rightMost--;
            leftMost++;
            maxArea = Math.max(maxArea, height * (rightMost - leftMost + 1));
            console.log(maxArea , height, rightMost, leftMost, "maxArea");
        }

        return maxArea;
    }
}

const heights = [7,1,7,2,2,4]

const obj = new Solution();
console.log(obj.largestRectangleArea(heights));
