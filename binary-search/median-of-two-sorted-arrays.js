// Problem: Median of Two Sorted Arrays
// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/median-of-two-sorted-arrays/question?list=neetcode150

// Problem Statement:
// You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.
// Your solution must run in O(log(m + n)) time complexity.

// Approach:
// We can use a binary search approach to find the correct partition point in the smaller array. The idea is to partition both arrays such that the left half of the combined arrays contains the same number of elements as the right half (or one more if the total number of elements is odd). We then check if the maximum element on the left side of both partitions is less than or equal to the minimum element on the right side. If this condition is satisfied, we have found the correct partition and can calculate the median based on whether the total number of elements is odd or even. If the condition is not satisfied, we adjust our search range accordingly.

// Complexity Analysis:
// - Time Complexity: O(log(min(m, n))) where m and n are the lengths of the two input arrays. This is because we are performing a binary search on the smaller array to find the correct partition point.
// - Space Complexity: O(1) since we are using only a constant amount of extra space for the pointers and variables, and we are not creating any additional data structures that grow with the input size.

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    
    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const L1 = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const R1 = (partitionX === m) ? Infinity : nums1[partitionX];
        
        const L2 = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const R2 = (partitionY === n) ? Infinity : nums2[partitionY];

        if (L1 <= R2 && L2 <= R1) {
            
            if ((m + n) % 2 === 0) {
                return (Math.max(L1, L2) + Math.min(R1, R2)) / 2.0;
            } 
            else {
                return Math.max(L1, L2);
            }
        } 
        else if (L1 > R2) {
            high = partitionX - 1; 
        } 
        else {
            low = partitionX + 1;  
        }
    }
}
    
}

const nums1 = [1,3], nums2 = [2,4]


const obj = new Solution()
console.log(obj.findMedianSortedArrays(nums1, nums2));


