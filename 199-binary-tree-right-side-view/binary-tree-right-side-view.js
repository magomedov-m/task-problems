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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    let res = [];
    let queu = [root];

    while (queu.length > 0) {
        let levelSize = queu.length;
        let curArr = [];
        
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

        res.push(curArr.pop());
    }

    return res;
};