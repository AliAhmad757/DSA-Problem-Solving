// Problem: Min Stack
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/minimum-stack/question?list=neetcode150

// Problem Statement:
// Design a stack class that supports the push, pop, top, and getMin operations.
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in 
// O(1)O(1) time.

// Approach:
// I implemented the MinStack class ussing two stacks: one for storing the actual stack elements and another parallel stack to keep track of the minimum values. Whenever a new value is pushed onto the main stack, I compared it with the current minimum (the top of the parallel stack). If the new value is smaller than or equal to the current minimum, I also pushed it onto the parallel stack. This way, the top of the parallel stack always holds the minimum value of the main stack. When popping an element from the main stack, if that element is equal to the current minimum, I also popped it from the parallel stack to ensure that the minimum value is updated correctly.

// Complexity Analysis:
// - Time Complexity: O(1) -> All operations (push, pop, top, getMin) run in constant time.
// - Space Complexity: O(n) -> In the worst case, we might push all elements onto the stack, which can take up to O(n) space.

class MinStack {
    constructor() {
        this.stack = []
        this.parallelStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        if(val > this.parallelStack[this.parallelStack.length - 1]){
            this.parallelStack.push(this.parallelStack[this.parallelStack.length - 1])
        }else{
            this.parallelStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.parallelStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.parallelStack[this.parallelStack.length - 1]
    }
}



const s =  ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
// [null,null,null,null,0,null,2,1]

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1


