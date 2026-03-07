// Problem: Daily Temperatures
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/daily-temperatures/question?list=neetcode150

// Problem Statement:
// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.



// Approach:
// I initialized an array res of the same length as temperatures, filled with 0s, to store the result. I also created an empty stack to keep track of the indices of the days for which we haven't found a warmer temperature yet.
// I iterated through the temperatures array using a for loop. For each day, I compared the current temperature with the temperature of the day at the top of the stack (the most recent day we haven't found a warmer temperature for).
// If the current temperature is warmer than the temperature at the index on top of the stack, it means we've found a warmer day for that index. I popped the index from the stack and calculated the number of days between the current index and the popped index, storing this value in res at the popped index.
// I continued this process until either the stack is empty or the current temperature is not warmer than the temperature at the index on top of the stack.
// Finally, I pushed the current index onto the stack to keep track of it for future comparisons. After processing all days, I returned the res array as the final result.

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the string once, resulting in O(n) time complexity.
// - Space Complexity: O(n) -> In the worst case, we might push all opening brackets onto the stack, which can take up to O(n) space.

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let res = new Array(n).fill(0); 
        
        let stack = []; 

        for (let i = 0; i < n; i++) {
            let currentTemp = temperatures[i];

            while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
                
                let prevIndex = stack.pop();
                
                res[prevIndex] = i - prevIndex; 
            }

            stack.push(i);
        }

        return res;
    }
}

const temperatures = [30,38,30,36,35,40,28]

const obj = new Solution()
console.log(obj.dailyTemperatures(temperatures));


