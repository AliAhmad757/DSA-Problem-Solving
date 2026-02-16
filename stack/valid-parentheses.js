// Problem: Valid Parentheses
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/validate-parentheses/question?list=neetcode150

// Problem Statement:
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
// The input string s is valid if and only if:
// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Approach:
// I used a stack to keep track of the opening brackets. I created a mapping object to associate each closing bracket with its corresponding opening bracket.
// I iterated through each character in the string. If the character is an opening bracket, I pushed it onto the stack. If it's a closing bracket, I checked if the top of the stack matches the corresponding opening bracket from the mapping. If it does, I popped the stack; otherwise, I returned false.
// After processing all characters, I checked if the stack is empty. If it is, it means all brackets were properly closed and nested, so I returned true. If not, I returned false.

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the string once, resulting in O(n) time complexity.
// - Space Complexity: O(n) -> In the worst case, we might push all opening brackets onto the stack, which can take up to O(n) space.

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapping  = {")" : "(" , "]" : "[", "}" : "{"}
        const stack = []
        for (let i = 0; i < s.length; i++) {
            const element = s[i];

            if(!mapping[element]){
                stack.push(element)
            }
            else{
                if(stack[stack.length - 1] === mapping[element]){
                    stack.pop()
                }else{
                    return false
                }
            }
        }

        return stack.length == 0 ? true : false
    }
}



const s = "("

const obj = new Solution()
console.log(obj.isValid(s));


