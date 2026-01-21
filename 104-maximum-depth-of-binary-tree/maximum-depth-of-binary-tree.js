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
 * @return {number}
 */

 /*
 root = null
 bin tree - true
 connected - true

 T(v + e)
 S(n)
 */
var maxDepth = function(root) {

    function depth(node) {
        if (!node) {
            return 0;
        }

        return 1 + Math.max(depth(node.left), depth(node.right));
    }

    return depth(root);
};