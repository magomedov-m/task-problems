/**
 * @param {string} s
 * @return {string}
 */
 // 4bc3n -> 4bn
 // '' - false
 // 4 - ''
 // ba
var clearDigits = function(s) {
    let stack = [];

    function isDigit(n) {
        return n.toLowerCase() == n.toUpperCase();
    }

    for (let i of s) {
        if (isDigit(i)) {
            if (stack.length > 0) stack.pop();
            continue;
        }

        stack.push(i);
    }

    return stack.join('');
};