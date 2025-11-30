/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];

    function isAlike(let1, let2) {
        return let1 != let2 && let1.toUpperCase() == let2.toUpperCase();
    }

    for (let i of s) {
        let end = stack.length ? stack[stack.length - 1] : '';

        if (isAlike(end, i)) {
            stack.pop();
            continue;
        }

        stack.push(i);
    }

    return stack.join('');
};