// Problem: Merge Two Sorted Linked Lists
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/merge-two-sorted-linked-lists/question?list=neetcode150

// Problem Statement:
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
// The new list should be made up of nodes from list1 and list2.

// Approach:
// I used two pointers to solve this problem. I initialized one pointer (currList1) at the head of list1 and another pointer (currList2) at the head of list2. I iterated through both lists and compared the values at both pointers. If the value at currList1 is less than or equal to the value at currList2, I added the node from list1 to the result list and moved currList1 to the next node. Otherwise, I added the node from list2 to the result list and moved currList2 to the next node. I continued this process until I reached the end of one of the lists, at which point I added any remaining nodes from the other list to the result list. Finally, I returned the head of the new sorted linked list. 

// Complexity Analysis:
// - Time Complexity: O(n + m) where n is the length of list1 and m is the length of list2.
// - Space Complexity: O(n + m) where n is the length of list1 and m is the length of list2. We are creating a new list to store the merged result.

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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let currList1 =  list1
        let currList2 =  list2 

        let result = []
        while (currList1.next === null && currList2.next === null){

            if(currList1.data <= currList2.data){
                result.push(newCurrList1)
                newCurrList1 =  list1.next
            }else{
                result.push(newCurrList2)
                newCurrList2 =  list2.next
            }
        }
    }
}

const list1 = [1,2,4], list2 = [1,3,5]
// output = [1,1,2,3,4,5]

const obj = new Solution()
console.log(obj.mergeTwoLists(list1, list2));


