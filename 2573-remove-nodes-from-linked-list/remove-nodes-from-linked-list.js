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
var removeNodes = function(head) {
    let stack = [];
    let node = head;

    while (node !== null) {
        while (stack.length > 0 && node.val > stack[stack.length - 1].val) {
            stack.pop();
        }

        stack.push(node);

        node = node.next;
    }

    let right = null;
    while (stack.length > 0) {
        node = stack.pop();

        node.next = right;
        right = node;
    }

    return node;
};