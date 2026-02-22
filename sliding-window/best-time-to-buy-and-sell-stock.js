// Problem: Best Time to Buy and Sell Stock
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/buy-and-sell-crypto/question?list=neetcode150

// Problem Statement:
// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.


// // Approach:
// I used two pointers to solve this problem. I initialized one pointer (l) at the beginning of the array to represent the day I buy the NeetCoin, and another pointer (r) at the next day to represent the day I sell the NeetCoin. I iterated through the prices array with the right pointer (r) and compared the prices at both pointers. If the price at the left pointer (l) is greater than the price at the right pointer (r), it means that buying on day l and selling on day r would result in a loss, so I moved the left pointer (l) to the right pointer (r) to consider buying on that day instead. Otherwise, I calculated the profit by subtracting the price at the left pointer (l) from the price at the right pointer (r) and updated the maximum profit if necessary. Finally, I returned the maximum profit.


// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the prices array exactly once.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1

        let maxProfit = 0;
        while(r < prices.length){
            if(prices[l] > prices[r]){
                l = r
            }
            maxProfit = Math.max((prices[r] - prices[l]), maxProfit)
            r++
        }
        return maxProfit
    }
}


const prices = [2,1,2,1,0,1,2];
// output = 6

const obj = new Solution()
console.log(obj.maxProfit(prices));


