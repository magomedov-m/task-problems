/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length == 1) return false;

    let parenthes = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let stack = []; // (

    for (let i of s) {
        if (parenthes[i]) {
            if (parenthes[i] !== stack.pop()) {
                return false;
            }
        }else {
            stack.push(i);
        }
    }

    return stack.length == 0;
};