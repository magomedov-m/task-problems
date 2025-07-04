/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
Q:
 1. root = null -> []
 2. bin tree - true
*/
var preorderTraversal = function(root) {
    if (!root) return [];

    let res = [];
    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();

        res.push(node.val);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return res;
};