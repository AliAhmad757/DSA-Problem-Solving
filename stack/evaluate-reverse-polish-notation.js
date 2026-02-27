// Problem: Evaluate Reverse Polish Notation
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/evaluate-reverse-polish-notation/question?list=neetcode150

// Problem Statement:
// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
// Return the integer that represents the evaluation of the expression.
// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

// Approach:
// I used a stack to evaluate the expression. I iterated through each token in the input array. If the token is an operator, I popped the top two operands from the stack, performed the corresponding operation, and pushed the result back onto the stack. If the token is an operand (a number), I simply pushed it onto the stack. After processing all tokens, the final result of the expression will be the only remaining element on the stack, which I returned as the output.

// Complexity Analysis:
// - Time Complexity: O(n) -> We traverse the tokens array once, resulting in O(n) time complexity.
// - Space Complexity: O(n) -> In the worst case, we might push all operands onto the stack, which can take up to O(n) space.

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        const isEvaluateFind = ["*", "/" , "+", "-"];
        let evaluation = tokens?.length === 1 ? tokens?.[0] : 0;

        for (let i = 0; i < tokens.length; i++) {
            const element = tokens[i];
            if(isEvaluateFind.includes(element)){

                const firstElement = stack[stack.length - 2]
                const secondElement = stack[stack.length - 1]
                
                if(element === "+"){
                    evaluation  = parseInt(firstElement) + parseInt(secondElement);

                }else if(element === "-"){
                    evaluation  = parseInt(firstElement) - parseInt(secondElement);
                }else if(element === "*"){
                    evaluation  = parseInt(firstElement) * parseInt(secondElement);
                }else{
                    evaluation  = Math.trunc(parseInt(firstElement) / parseInt(secondElement));
                }

                stack.pop()
                stack.pop()

                stack.push(evaluation)
            }else{
                stack.push(element)

            }
        }

        return evaluation
    }
}

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 5


const obj = new Solution()
console.log(obj.evalRPN(tokens));

