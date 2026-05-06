// Problem: Find Words That Can Be Formed by Characters
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/find-words-that-can-be-formed-by-characters/question?list=neetcode150

// Problem Statement:
// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).
// Return the sum of lengths of all good strings in words.

// Approach:
// We can create a frequency map (hash map) for the characters in the string chars. Then, for each word in the array words, we can create a temporary frequency map and check if the word can be formed using the characters in chars by comparing the frequency maps. If a word can be formed, we add its length to the total count. Finally, we return the total count of characters from all good strings.

// Complexity Analysis:
// - Time Complexity: O(n * m) where n is the number of words and m is the average length of the words, since we need to iterate through each word and check its characters against the frequency map.
// - Space Complexity: O(k) where k is the number of unique characters in chars, since we are storing the frequency of characters in a hash map.

class Solution {
  /**
   * @param {string[]} words
   * @param {string} chars
   * @return {number}
   */
  countCharacters(words, chars) {
    const hashMap = new Map();
    for (const element of chars) {
      if (hashMap.has(element)) {
        hashMap.set(element, hashMap.get(element) + 1);
      } else {
        hashMap.set(element, 1);
      }
    }

    let totalChars = 0;
    for (const element of words) {
      const tempHashMap = new Map(hashMap);
      let isValid = true;

      console.log(tempHashMap,"tempHashMap");
      for (const element1 of element) {
        if (tempHashMap.has(element1) && tempHashMap.get(element1) >= 1) {
          tempHashMap.set(element1, tempHashMap.get(element1) - 1);
        } else {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        totalChars += element.length;
      }

    }

    return totalChars;
  }
}

const words = ["bt", "hat", "tree", "cat"],
  chars = "atach";

const obj = new Solution();
console.log(obj.countCharacters(words, chars));
