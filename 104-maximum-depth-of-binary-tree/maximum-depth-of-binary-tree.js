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
var maxDepth = function(root) {
    let stack = [[root, 1]];
    let max = 0;

    while (stack.length > 0) {
        let node = stack.pop();
        let curr = node[0];
        let depth = node[1]

        if (curr !== null) {
            max = Math.max(max, depth);
            stack.push([curr.left, depth + 1]);
            stack.push([curr.right, depth + 1]);
        }
    }

    return max;
};