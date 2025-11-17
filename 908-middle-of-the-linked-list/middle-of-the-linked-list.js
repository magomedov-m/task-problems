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
 // [] - false
 // 1 <= node.val <= 100
var middleNode = function(head) {
    let count = 0;
    let dummy = head;

    while (dummy) {
        count++;
        dummy = dummy.next;
    }
    let flag = count % 2
    count = Math.ceil(count / 2);

    while (head) {
        count--;
        if (count == 0) {
            if (flag > 0) {
                return head;
            }else {
                return head.next;
            }
        }

        head = head.next;
    }
};