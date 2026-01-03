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
 * @return {TreeNode}
 */
 /*
 root = [] - true -> []
 n-ary tree - false

 O(n)
 S(n)
 */
var invertTree = function(root) {
    function invert(node) {
        if (node === null) return null;

        let tmp = node.left;

        node.left = node.right;
        node.right = tmp;

        invert(node.left);
        invert(node.right);

        return node;
    }

    return invert(root);
};