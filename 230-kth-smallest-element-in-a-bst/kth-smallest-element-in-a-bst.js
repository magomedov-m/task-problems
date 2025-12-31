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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    function findMax(node) {
        let stack = [root];
        let res = 0;
        
        while (stack.length > 0) {
            let cur = stack.pop();

            if (cur !== null) {
                res = Math.max(res, cur.val);

                stack.push(cur.left);
                stack.push(cur.right);
            }
        }

        return res;
    }

    let max = findMax(root);

    let arr = new Array(max + 1).fill(-1);

    let st = [root];

    while (st.length > 0) {
        let node = st.pop();

        if (node !== null) {
            let idx = node.val;
            arr[idx] = idx;

            st.push(node.right);
            st.push(node.left);
        }
    }

    for (let i of arr) {
        if (i > -1) {
            k--;
        }

        if (k === 0) {
            return i;
        }
    }
};








