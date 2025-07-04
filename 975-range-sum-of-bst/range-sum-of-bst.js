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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    function findRanges(root) {
        if (!root) return [];

        let res = [];
        let stack = [root];

        while (stack.length > 0) {
            let node = stack.pop();

            if (node.val >= low && node.val <= high) {
                res.push(node.val);
            }

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }

        return res;
    }

    let arr = [...findRanges(root)];

    let sum = 0;
    for (let i of arr) {
        sum += i;
    }

    return sum;
};