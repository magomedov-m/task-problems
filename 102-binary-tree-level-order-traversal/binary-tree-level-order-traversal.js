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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let queu = [root];

    while (queu.length > 0) {
        let curArr = [];
        let levelSize = queu.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queu.shift();
            curArr.push(node.val);

            if (node.left) {
                queu.push(node.left);
            }
            if (node.right) {
                queu.push(node.right);
            }
        }

        if (curArr.length > 0) {
            res.push(curArr);
        }
    }

    return res;
};