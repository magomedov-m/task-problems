/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let close = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (let i of s) {
        if (stack.length > 0 && close[i]) {
            if (stack[stack.length - 1] == close[i]) {
                stack.pop();
            }else {
                return false;
            }
        }else {
            stack.push(i);
        }
    }

    return stack.length === 0;
};