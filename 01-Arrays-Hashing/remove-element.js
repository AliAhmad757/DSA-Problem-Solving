// Problem: Remove Element
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/remove-element/question?list=neetcode150

// Problem Statement:
// You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.
// After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.
// Note:
// The order of the elements which are not equal to val does not matter.
// It is not necessary to consider elements beyond the first k positions of the array.
// To be accepted, the first k elements of nums must contain only elements not equal to val.
// Return k as the final result.


// Approach:
// I used a two-pointer approach to solve this problem. I initialized a pointer k to keep track of the position where the next non-val element should be placed. I iterated through the nums array, and for each element, if it is not equal to val, I assigned it to the position pointed by k and incremented k. This way, all non-val elements are moved to the front of the array, and k will represent the count of non-val elements at the end of the iteration.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(1) -> We use constant space to store the value of k.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if(element === val){
            
            } else{
                nums[k] = element
                k += 1 
            }

        }

        return k
    }
}

let nums=[0,1,2,2,3,0,4,2],  val = 2

const obj = new Solution();
console.log(obj.removeElement(nums, val));
