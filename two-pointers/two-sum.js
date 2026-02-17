// Problem: Two Integer Sum II
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/two-integer-sum-ii/question

// Problem Statement:
// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.
// Your solution must use 
// O(1) O(1) additional space.

// Approach:
// I used the two-pointer technique to solve this problem. I initialized two pointers, one at the beginning of the array (left) and one at the end of the array (right). I then calculated the sum of the elements at these two pointers. If the sum is equal to the target, I returned the indices (adjusted for 1-indexing). If the sum is greater than the target, I moved the right pointer one step to the left to decrease the sum. If the sum is less than the target, I moved the left pointer one step to the right to increase the sum. I continued this process until I found the two numbers that add up to the target.

// Complexity Analysis:
// - Time Complexity: O(n) -> In the worst case, we might have to traverse the entire array once, resulting in O(n) time complexity.
// - Space Complexity: O(1) -> We are using only a constant amount of extra space for the two pointers and the sum variable, resulting in O(1) space complexity.

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let sum = 0;
        let l = 0;
        let r = numbers.length - 1;
        while (l < r) {
            sum = numbers[l] + numbers[r]
            
            if(sum === target){
                return [l + 1, r + 1]
            }else if(sum > target){
                r--
            }else{
                l++
            }
        }
    }
}


const numbers = [1,2,3,4], target = 3

const obj = new Solution()
console.log(obj.twoSum(numbers , target));


