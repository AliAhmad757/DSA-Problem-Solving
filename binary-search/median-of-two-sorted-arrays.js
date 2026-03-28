// Problem: Median of Two Sorted Arrays
// Difficulty: Hard
// NeetCode Link: https://neetcode.io/problems/median-of-two-sorted-arrays/question?list=neetcode150

// Problem Statement:
// You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.
// Your solution must run in O(log(m + n)) time complexity.

// Approach:
// I used a two-pointer approach to merge the two sorted arrays into a single sorted array. I initialized two pointers, one for each array, and compared the elements at those pointers. I added the smaller element to the result array and moved the corresponding pointer forward. I continued this process until I had merged all elements from both arrays into the result array. After merging, I calculated the median of the merged array. If the length of the merged array is odd, the median is the middle element. If it is even, the median is the average of the two middle elements.

// Complexity Analysis:
// - Time Complexity: O(m + n) where M and N are the lengths of the two input arrays, since we are merging the two arrays into a single sorted array.
// - Space Complexity: O(m + n) since we are creating a new array to store the merged elements of the two input arrays.

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let l = 0;
        let r = 0;
        let result = []

        while (result.length < nums1.length + nums2.length) {
            const firstElement = nums1[l] !== undefined ? nums1[l] : Infinity ;
            const secondElement = nums2[r] !== undefined ? nums2[r] : Infinity ;

            if(firstElement <= secondElement){
                result.push(firstElement)
                l++
            }else{
                result.push(secondElement)
                r++
            }
        }

        const medianIndex = Math.floor(result.length / 2);
        if(result.length % 2 === 0){
            return (result[medianIndex] + result[medianIndex - 1]) / 2
        }

        return result[medianIndex]
    }
}

const nums1 = [1,3], nums2 = [2,4]


const obj = new Solution()
console.log(obj.findMedianSortedArrays(nums1, nums2));


