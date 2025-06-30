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
var invertTree = function(root) {
    if (root == null) return root;

    const queue = new Queue([root]);

    while (!queue.isEmpty()) {
        let node = queue.pop();
        [node.left, node.right] = [node.right, node.left];
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

    return root;
};