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

        let max = Math.max(depth(node.right) + 1, depth(node.left) + 1);
        
        return max;
    }

    let res = depth(root);

    return res;
};