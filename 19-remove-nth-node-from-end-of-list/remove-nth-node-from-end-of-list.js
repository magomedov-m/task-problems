/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
/*
Q:
  1. len == 1 - true
  2. len == 0 - false
  3. n <= len
  4. only number - true
*/

    let res = new ListNode();
    res.next = head;
    let dummy = res;

    let count = 0;
    let current = head;
    while (current) {
        count++;
        current = current.next;
    }

    
    while (count > n) {
        count--
        dummy = dummy.next;
    }

    dummy.next = dummy.next.next;

    return res.next;
};