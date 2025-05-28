/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = [];
    let current = head;

    while (current) {
        stack.push(current.val);
        current = current.next;
    }
    
    while (head) {
        if (head.val !== stack.pop()) return false;
        head = head.next;
    }

    return true;
};