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
 // [] - true
 // +- number = true
 // sorted - true
 // not duplicate - false
var deleteDuplicates = function(head) {
    let cur = head;

    while (cur && cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        }else {
            cur = cur.next;
        }
    }

    return head;
};

// [1, 2, 2, 4]
// res = 1, 2, 2, 4