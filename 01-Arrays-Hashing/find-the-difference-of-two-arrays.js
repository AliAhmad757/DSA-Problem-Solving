// Problem: Find the Difference of Two Arrays
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/find-the-difference-of-two-arrays/question?list=neetcode150

// Problem Statement:
// You are given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Approach:
// I used hash maps to store the unique elements of both arrays. Then, I iterated through the keys of each hash map and checked if they are not present in the other hash map. If a key from the first hash map is not present in the second hash map, I added it to the first list in the result. Similarly, if a key from the second hash map is not present in the first hash map, I added it to the second list in the result. Finally, I returned the result as a list of two lists containing the distinct integers from both arrays that are not present in each other.

// Complexity Analysis:
// - Time Complexity: O(m + n) -> We iterate through both arrays once, where m and n are the lengths of nums1 and nums2 respectively.
// - Space Complexity: O(m + n) -> We use hash maps to store the unique elements of both arrays, which in the worst case can contain all elements of nums1 and nums2 respectively.

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        let hashMapNums1 = {}
        let hashMapNums2 = {}
        const res = [[],[]]

        for (let i = 0; i < nums1.length; i++) {
            const element = nums1[i];
            if(hashMapNums1[element] === undefined){
                hashMapNums1[element] = i
            }
        }

        for (let i = 0; i < nums2.length; i++) {
            const element = nums2[i];
            if(hashMapNums2[element] === undefined){
                hashMapNums2[element] = i
            }
        }

        for (const key in hashMapNums1) {
            if(hashMapNums2[key] === undefined){
                res[0].push(Number(key))
            }
        }

         for (const key in hashMapNums2) {
            if(hashMapNums1[key] === undefined){
                res[1].push(Number(key))
            }
        }

        return res
    }
}



const nums1 = [1,2,3], nums2 = [2,4,6]

const obj = new Solution();
console.log(obj.findDifference(nums1, nums2));
