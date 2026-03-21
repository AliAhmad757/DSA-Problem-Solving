// Problem: Intersection of Two Arrays
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/intersection-of-two-arrays/question?list=neetcode150

// Problem Statement:
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Note: The intersection of two arrays is defined as the set of elements that are present in both arrays.

// Approach:
// I used a hash set to store the unique elements of the first array (nums1). Then, I iterated through the second array (nums2) and checked if each element exists in the hash set. If it does, I added it to another hash set to keep track of the unique intersection elements. Finally, I converted the intersection hash set to an array and returned it as the result.

// Complexity Analysis
// - Time Complexity: O(n + m) -> We iterate through both arrays once, where n and m are the lengths of nums1 and nums2 respectively.
// - Space Complexity: O(n) -> We use a hash map to store the elements of the first array, which in the worst case can contain all elements of nums1.

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set = new Set()
        const res = new Set();
        for (let i = 0; i < nums1.length; i++) {
            const element = nums1[i];
            set.add(element)
        }

        for (let i = 0; i < nums2.length; i++) {
            const element = nums2[i];
            if(set.has(element)){
                res.add(element)
            }
        }

        return [...res]
    }
}



const nums1 = [1,2,2,1], nums2 = [2,2]

const obj = new Solution()
console.log(obj.intersection(nums1, nums2));


