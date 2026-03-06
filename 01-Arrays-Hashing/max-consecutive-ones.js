// Problem: Max Consecutive Ones
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/max-consecutive-ones/question?list=neetcode150

// Problem Statement:
// You are given a binary array nums, return the maximum number of consecutive 1's in the array.

// Approach:
// I initialized two variables, k and maxNumber, to 0. The variable k will keep track of the current count of consecutive 1's, while maxNumber will store the maximum count found so far.
// I iterated through the nums array, and for each element, I checked if it is equal to 1. If it is not equal to 1, I reset k to 0, as the sequence of consecutive 1's has been broken. If it is equal to 1, I incremented k by 1.
// After updating k, I compared it with maxNumber and updated maxNumber to be the maximum of the two values.
// Finally, I returned maxNumber as the result, which represents the maximum number of consecutive 1's in the array.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the details exactly once.
// - Space Complexity: O(1) -> We use constant space to store count variable.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
    let k = 0;
    let maxNumber = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        
        if(element !== 1){
            k = 0
        }else{
            k++
        }

        maxNumber =  Math.max(k, maxNumber)
    }

    return maxNumber
    }
}


let  nums = [1,0,1,1,1,1,1,0,1,1]


const obj = new Solution();
console.log(obj.findMaxConsecutiveOnes(nums));
