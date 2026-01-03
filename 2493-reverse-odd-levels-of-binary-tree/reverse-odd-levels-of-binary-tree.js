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
    root = [] - false

    O(n)
    S(n)
*/ 
var reverseOddLevels = function(root) {
    function reverse(left, right, level) {
        if (!left || !right) return;

        if (level % 2 === 1) {
            [left.val, right.val] = [right.val, left.val];
        }

        reverse(left.left, right.right, level + 1);
        reverse(left.right, right.left, level + 1);

    }

    reverse(root.left, root.right, 1);
    return root;
};