/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let value = 0;

    for (let i of s) {
        if (i === '(') {
            stack.push(i);
        }else if (i === ')') {
            stack.pop();
        }
        value = Math.max(value, stack.length);
    }

    return value;
};