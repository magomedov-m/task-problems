/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let n = '';

    while (head) {
        n += head.val;
        head = head.next;
    }

    let digit = parseInt(n, 2);

    return digit;
};