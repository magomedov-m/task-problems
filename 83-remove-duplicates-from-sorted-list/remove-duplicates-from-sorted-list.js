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
var deleteDuplicates = function(head) {
    let l = head;
    let r = head ? head.next : null;

    while (l && r) {
        if (l.val == r.val) {
            r = r.next
        }else {
            l.next = r;
            l = r;
            r = r.next;
        }
    }

    if (l) l.next = null;

    return head;
};