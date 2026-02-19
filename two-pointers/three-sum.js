// Problem: Three Sum

// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/three-integer-sum/question?list=neetcode150

// Problem Statement:
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. 
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. 
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. 
// The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Approach:
// We can sort the array and then use two pointers to find the triplets that sum up to zero. We need to be careful to skip duplicate elements to avoid repeating the same triplet multiple times.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(m+n) -> We use space to store every nums number in the objects.

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   threeSum(nums){
    nums.sort((a, b)=> a-b)

    let threeSumArray = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) continue;
        const element = nums[i];
        let l = i + 1;
       
        
        let r = nums.length - 1;

        while (l < r) {
        let sum = element + nums[l] + nums[r];
            if(sum === 0){
                threeSumArray.push([element, nums[l], nums[r]])
                while(nums[r] === nums[r-1]){
                    r--
                }
                r--
            }else if(sum > 0){
                r--
            }else{
                l++
            }
        }
    }

    return threeSumArray    
   }
}

const nums=[0, 0 , 0]



const obj = new Solution();

console.log(obj.threeSum(nums));
