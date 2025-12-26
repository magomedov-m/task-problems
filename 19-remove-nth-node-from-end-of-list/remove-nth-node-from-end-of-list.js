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
    let dummy = new ListNode(0, head);
    let cur = dummy;
    let temp = dummy;

    let len = 0;
    while (cur.next) {
        len++;
        cur = cur.next;
    }

    len -= n;

    while (temp.next) {

        if (len === 0) {
            temp.next = temp.next.next;
            break;
        }
        len--;
        
        temp = temp.next;
    }

    return dummy.next;
};