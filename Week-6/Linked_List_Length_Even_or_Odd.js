//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {number}
*/

class Solution {
  // Function should return 0 if length is even else return 1
  isLengthEvenOrOdd(head) {
    //code here
    // initialize a var - count to count the number of nodes in the linked list
    let count = 0;
    // initialize a var - current to traverse the linked list from the head
    let current = head;
    
    // traverse the linked list until we reach the end
    while (current != null) {
        // increment the count variable for each node we encounter
        count++;
        // move to the next node
        current = current.next;
    }

    // if count is odd, return 1, else return 0
    if (count % 2 == 0) return 0;
    return 1;
  }
}