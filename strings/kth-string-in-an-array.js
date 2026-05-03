// Problem: Kth Distinct String in an Array
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/kth-distinct-string-in-an-array/question?list=neetcode150

// Problem Statement:
// A distinct string is a string that is present only once in an array.
// You are given an array of strings arr, and an integer k, return the k-th distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
// Note that the strings are considered in the order in which they appear in the array.

// Approach:
// We can use a hash map (or dictionary) to count the occurrences of each string in the array. After counting, we can iterate through the hash map to collect the distinct strings (those that occur only once) in an array. Finally, we can return the k-th distinct string from this array if it exists, or an empty string if there are fewer than k distinct strings.

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the input array, since we need to iterate through the array to count occurrences and then iterate through the hash map to collect distinct strings.
// - Space Complexity: O(n) in the worst case, if all strings in the array are distinct, we will store all of them in the hash map and the array of distinct strings.

class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const hashMap = new Map();
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(hashMap.has(element)){
                hashMap.set(element, (hashMap.get(element) + 1))
            }else{
                hashMap.set(element, 1)
            }
        }

        let arrCheck = []
        for (const [key, value] of hashMap) {
            if(value === 1){
                arrCheck.push(key)
            }
        }

        return arrCheck.length >= k ? arrCheck[k - 1] : ""
    }
}


const arr = ["aaa","aa","a"], k = 1

const obj = new Solution()
console.log(obj.kthDistinct(arr, k));


