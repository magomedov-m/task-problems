/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];

    if (s.length < 2) return s;

    for (let i of s) {
        if (i === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        stack.push(i);
    }

    return stack.join('');
};