// Problem: Can Place Flowers
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/can-place-flowers/question?list=neetcode150

// Problem Statement:
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// You are given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


// Approach:
// I run a loop for every element in the flowerbed and check if the current plot is empty and its left and right plots are also empty. If all three conditions are satisfied, I plant a flower in the current plot and decrease n by 1. If n becomes 0, I return true. If the loop ends and n is still greater than 0, I return false.

// Complexity Analysis:
// - Time Complexity: O(m) -> We iterate through the flowerbed at most once, where m is the length of the flowerbed.
// - Space Complexity: O(1) -> We use only a constant amount of extra space for variables.

class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        if (n === 0) return true;

        for (let i = 0; i < flowerbed.length; i++) {
            
            if (flowerbed[i] === 0) {
                
                const isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
                const isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

                if (isLeftEmpty && isRightEmpty) {
                    flowerbed[i] = 1; 
                    n--;            
                    
                    if (n === 0) {
                        return true;
                    }
                }
            }
        }

        return n <= 0;
    }
}

let flowerbed=[0,0,0], n = 1

const obj = new Solution();
console.log(obj.canPlaceFlowers(flowerbed, n));