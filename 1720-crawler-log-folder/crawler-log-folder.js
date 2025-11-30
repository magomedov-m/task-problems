/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = [];

    for (let i of logs) {
        if (i != './' && i != '../') {
            stack.push(i)
        }else if (i == '../') {
            stack.pop()
        }
    }

    return stack.length;
};