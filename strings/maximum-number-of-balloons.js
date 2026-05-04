// Problem: Maximum Number of Balloons
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/maximum-number-of-balloons/question?list=neetcode150

// Problem Statement:
// You are given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Approach:
// We can use a hash map (or dictionary) to count the occurrences of each character in the input string. We are specifically interested in the characters 'b', 'a', 'l', 'o', and 'n' since they are the characters that make up the word "balloon". After counting the occurrences, we can determine how many times we can form the word "balloon" by checking the counts of these characters. The characters 'l' and 'o' appear twice in "balloon", so we need to divide their counts by 2 when calculating the maximum number of instances. Finally, we return the minimum count among these characters as the result, since that will determine how many complete instances of "balloon" we can form.

// Complexity Analysis:
// - Time Complexity: O(n) where n is the length of the input string, since we need to iterate through the string to count occurrences.
// - Space Complexity: O(1) since we are only interested in a fixed number of characters ('b', 'a', 'l', 'o', 'n'), the space used by the hash map will not grow with the size of the input string.

class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const dummyText = ["b", "a","l","o","n"]
        const hashMap = new Map()
        for (const element of text) {
            if(dummyText.includes(element)){
                if(hashMap.has(element)){
                    hashMap.set(element, hashMap.get(element) + 1)
                }else{
                     hashMap.set(element, 1)
                }
            }
        }

        let maximum = 0;

        for (const [key, value] of hashMap) {

            if(key === "a" || key ===  "n" || key ===  "b"){
                maximum = maximum === 0 ? value : Math.min(maximum, value)
            }
            else{
                maximum = maximum === 0 ? value / 2 : Math.min(maximum, value/2)
            }
        }

        return hashMap.size !== 5 ? 0 : Math.floor(maximum)
    }
}


const text = "balon"

const obj = new Solution()
console.log(obj.maxNumberOfBalloons(text));


