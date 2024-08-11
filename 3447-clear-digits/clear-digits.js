/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];

    for (let i of s) {
        if (!isNaN(i)) {
            stack.pop();
        }else {
            stack.push(i);
        }
    }

    return stack.join('');
};