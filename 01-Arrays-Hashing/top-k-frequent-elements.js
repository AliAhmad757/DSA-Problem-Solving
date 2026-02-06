// Problem: Top K Frequent Elements
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150

// Problem Statement:
// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// Approach:
// I used a hash map to count the frequency of each element in the input array.
// Then, I created a bucket array where the index represents the frequency and each bucket contains a list of numbers that have that frequency.
// Finally, I iterated through the bucket array in reverse order to collect the top k frequent elements until I have collected k elements.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the nums exactly once.
// - Space Complexity: O(n) -> We use space to store every nums number in the objects.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {}

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if(hashMap[element]){
                hashMap[element] += 1
            }
            else{
                hashMap[element] = 1
            }            
        }
       
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let [num, freq] of Object.entries(hashMap)) {
            bucket[freq].push(Number(num));
        }

        const res = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length > 0) {
                for (let n of bucket[i]) {
                    res.push(n);
                    if (res.length === k) {
                        return res;
                    }
                }
            }
        }

        return res
    }   
}


const nums = [1,1, 2, 2], k = 2

const obj = new Solution();
console.log(obj.topKFrequent(nums, k));
