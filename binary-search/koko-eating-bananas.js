// Problem: Koko Eating Bananas
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/eating-bananas/question

// Problem Statement:
// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
// Return the minimum integer k such that you can eat all the bananas within h hours.

// // Approach:
// We can use binary search to find the minimum eating speed k. The minimum possible speed is 1 banana per hour, and the maximum possible speed is the size of the largest pile of bananas. We will perform binary search on this range of speeds. For each candidate speed k, we will calculate the total time required to eat all the bananas at that speed. If the total time is less than or equal to h, it means we can eat all the bananas at that speed, and we will try to find a smaller speed by moving the right pointer. If the total time is greater than h, it means we cannot eat all the bananas at that speed, and we will need to increase our speed by moving the left pointer.

// Complexity Analysis:
// - Time Complexity: O(N log M), where N is the number of piles and M is the maximum number of bananas in a pile. The binary search will take O(log M) time, and for each candidate speed, we will calculate the total time to eat all bananas, which takes O(N) time.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}

const piles = [1,4,3,2], h = 9
// output = 3

const obj = new Solution()
console.log(obj.search(piles, h));


