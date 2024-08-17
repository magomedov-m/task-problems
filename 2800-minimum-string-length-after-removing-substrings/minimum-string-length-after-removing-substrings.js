/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];

    if (s.length < 2) return s.length;

    for (let i of s) {
        if (i == 'B' && stack[stack.length - 1] == 'A') {
            stack.pop();
        }else if (i == 'D' && stack[stack.length - 1] == 'C') {
            stack.pop();
        }else {
            stack.push(i);
        }
    }

    return stack.length;
};