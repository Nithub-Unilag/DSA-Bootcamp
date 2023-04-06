/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    // initialize 2 pointers, named i and j
    let i = head;
    let j = head;

    // loop while j is not null and j.next is not null
    while (j !== null && j.next !== null) {
        // move i one step at a time
        i = i.next;

        // move j two steps at a time
        j = j.next.next;
        
        // if i and j meet at the same node, a cycle is found
        if (i === j) return true;
    }
    // if j reaches the end of the list, there is no cycle
    return false;
};
