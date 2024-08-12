/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = [];

    for (let i of logs) {
        if (i === '../') {
            stack.pop();
        }else if (i === './') {
            continue;
        }else {
            stack.push(i);
        }
    }

    return stack.length;
};