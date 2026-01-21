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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

 /*
 bin tree - true
 subRoot/root size = 1-100
 not balance - true
 root < subRoot - true

 T(min(root, subR))
 S(h)
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    
    function same(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;
        if (root.val !== subRoot.val) return false;

        return same(root.left, subRoot.left) && same(root.right, subRoot.right);
    }

    return same(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};