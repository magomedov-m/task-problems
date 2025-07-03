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
var postorderTraversal = function(root) {
    let res = [];

    function dfs(node) {
        if (!node) return;

        res.unshift(node.val);

        dfs(node.right);
        dfs(node.left);
    }

    dfs(root);

    return res;
};