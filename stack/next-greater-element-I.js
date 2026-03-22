// Problem: Next Greater Element I
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/next-greater-element-i/question?list=neetcode150

// Problem Statement:
// The next greater element of some element x in an array is the first greater element that is to the right of x in the array.

// You are given two 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2. nums2 contains unique elements.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Approach:
// I used a stack to keep track of the indices of the elements in nums2. As I iterated through nums2, I compared the current element with the element at the top of the stack. If the current element is greater than the element at the top of the stack, it means that we have found the next greater element for the index at the top of the stack. I popped the index from the stack and stored the next greater element in a hash map. I continued this process until the current element is not greater than the element at the top of the stack or until the stack is empty. Finally, I iterated through nums1 and used the hash map to find and store the next greater elements for each element in nums1.

// Complexity Analysis:
// - Time Complexity: O(n + m) -> We iterate through both arrays once, where n and m are the lengths of nums1 and nums2 respectively.
// - Space Complexity: O(n) -> We use a hash map to store the next greater elements for nums2, which in the worst case can contain all elements of nums2.

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const stack = [];  // stack stores indices
        let hashMap = {}
        const res = []
        const n = nums2.length;

        for (let i = 0; i < nums2.length; i++) {
            while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
                const idx = stack.pop();
                hashMap[idx] = nums2[i];
            }
            stack.push(nums2[i]);
        }

        for (let i = 0; i < nums1.length; i++) {
            const element = nums1[i];
            res.push(hashMap[element] !== undefined ? hashMap[element] : -1);
        }

        return res;
    }
}




const nums1=[4,1,2]
nums2=[1,3,4,2]


const obj = new Solution()
console.log(obj.nextGreaterElement(nums1, nums2));
