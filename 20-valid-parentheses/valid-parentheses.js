/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    let stack = [];

    for (let i of s) {
        if (!obj[i]) {
            stack.push(i);
        }else if (i == ')' && stack.pop() !== '(') {
            return false
        }else if (i == '}' && stack.pop() !== '{') {
            return false
        }else if (i == ']' && stack.pop() !== '[') {
            return false
        }
    }

    return stack.length == 0;
};