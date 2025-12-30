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
// var reverseList = function(head) {
//     if (!head) return head;
//     let prev = null;
//     let next = null;
//     let newHead = null;
    
//     while (head) {
//         next = head.next;
//         head.next = prev;
//         prev = head;
//         newHead = next ? next : head;
//         head = next;
//     }
    
//     return newHead;
// };

var reverseList = function(head) {
    if (!head) return head
    let nodes = [];
    
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    
    let newHead = nodes.pop();
    while (nodes.length !== 0) {
        let cur = nodes.pop();
        newHead.next = cur;
        newHead = cur;
    }
}

var reverseList = function(head) {
    let arr = [null];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    
    for (let r = arr.length - 1; r >= 1; r--) {
        arr[r].next = arr[r - 1];
    }
    
    return arr[arr.length - 1];
}