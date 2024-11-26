/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];

    for (let i of s) {
        if (i === '*') {
            stack.pop();
        }else {
            stack.push(i)
        }
    }

    return stack.join('')
};