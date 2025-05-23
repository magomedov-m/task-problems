/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 0;
    let start = head;

    while (start) {
        start = start.next;
        count++;
    }

    let len = Math.floor(count / 2);

    let res = head;
    while (len > 0) {
        res = res.next;
        len--;
    }

    return res;
};