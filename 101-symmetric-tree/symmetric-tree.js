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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function symmetric(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;

        if (left.val != right.val) {
            return false;
        }

        return symmetric(left.left, right.right) && symmetric(left.right, right.left);
    }

    return symmetric(root, root);
};