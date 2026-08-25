// Problem: Guess Number Higher Or Lower
// Difficulty: Easy
// NeetCode Link: http://neetcode.io/problems/guess-number-higher-or-lower/question?list=allNC

// Problem Statement:
// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
// 0: your guess is equal to the number I picked (i.e. num == pick).
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// Return the number that I picked.

// // Approach:
// I used a binary search approach to solve this problem. The idea is to maintain two pointers, low and high, to represent the current search range within the nums array. I calculated the middle index (mid) of the current search range and compared the value at that index with the last element of the array. If the value at mid is greater than the last element, it means that the minimum element must be in the right half of the current search range, so I moved the low pointer to mid + 1. Otherwise, if the value at mid is less than or equal to the last element, it means that the minimum element must be in the left half of the current search range (including mid), so I moved the high pointer to mid. I continued this process until low is less than high, which means that low will eventually point to the minimum element in the array, and I returned nums[low].

// Complexity Analysis:
// - Time Complexity: O(log n) -> We divide the search space in half at each step.
// - Space Complexity: O(1) -> We only use a constant amount of extra space.

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let low = 0;
        let high = n;

        while(low <= high){
            const num = Math.floor((low/high) / 2);
            const number = guess(num)
            if(num === number){
                return num
            }else if(num < number){
                low = number
            }else{
                high = number
            }
        }

    }
}

const n = 5, pick = 3
// output = 3

const obj = new Solution()
console.log(obj.guessNumber(nums));


