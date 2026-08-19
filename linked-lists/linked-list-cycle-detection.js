// Problem: Linked List Cycle Detection
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/linked-list-cycle-detection/question?list=neetcode150

// Problem Statement:
// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
// There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
// Note: index is not given to you as a parameter.

// Approach:
// I used two pointers to solve this problem. I initialized one pointer (slowPointer) at the head of the linked list and another pointer (fastPointer) at the head of the linked list. I iterated through the linked list with both pointers, moving the slowPointer one step at a time and the fastPointer two steps at a time. If there is a cycle in the linked list, the fastPointer will eventually catch up to the slowPointer, and I will return true. If the fastPointer reaches the end of the linked list (null), then there is no cycle, and I will return false.


// Complexity Analysis:
// - Time Complexity: O(n)
// - Space Complexity: O(1)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head) {
    let slowPointer = head;
    let fastPointer = head;

    if(head === null){
        return false
    }

    while (slowPointer.next !== null) {
        slowPointer = slowPointer.next;
        if(fastPointer.next.next){
        fastPointer = fastPointer.next.next 
        }else{
            fastPointer = fastPointer.next
        }

        if(!fastPointer.next){
            return false
        }

        if (slowPointer === fastPointer) {
          return true;
        }   
    }

    return false;
  }
}


const head = [1, 2, 3, 4],
  index = 1;
// output =  true

const obj = new Solution();
console.log(obj.hasCycle(head));
