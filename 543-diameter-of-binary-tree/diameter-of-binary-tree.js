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
var diameterOfBinaryTree = function(root) {
    let ans = 0;

    function max(node) {
        if (!node) return 0;

        let left = max(node.left);
        let right = max(node.right);
        
        ans = Math.max(ans, right + left);

        return Math.max(left, right) + 1;
    }

    max(root);

    return ans;
};