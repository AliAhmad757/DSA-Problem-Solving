// Problem: Majority Element
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/majority-element/question?list=neetcode150

// Problem Statement:
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times in the array. You may assume that the majority element always exists in the array.

// Approach:
// I initialized two variables, majorityElementValue and majorityValueCount, to keep track of the current majority element and its count. I iterated through the nums array, and for each element, I checked if it is equal to the current majority element. If it is, I incremented the count. If it is not, I decremented the count. If the count becomes zero, it means that the current majority element has been "canceled out" by an equal number of different elements, so I updated the majorityElementValue to the current element and reset the count to 1.


// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums array exactly once.
// - Space Complexity: O(1) -> We use only a constant amount of extra space for variables.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majorityElementValue = nums[0];
        let majorityValueCount = 1;

        for (let i = 0; i < nums.length; i++) {
            
            if(majorityElementValue === nums[i]){
                majorityValueCount++
            }else{
                majorityValueCount--
                if(majorityValueCount === 0){
                    majorityElementValue = nums[i]
                    majorityValueCount = 1;
                }
            }
        }

        return majorityElementValue
    }
}


const nums = [5,5,1,1,1,5,5]

const obj = new Solution();
console.log(obj.majorityElement(nums));
