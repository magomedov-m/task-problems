/**
 * @param {string} s
 * @return {number}
 */
 // '' - false
 // not AB, CD - true
var minLength = function(s) {
    let stack = [];
    
    for (let i of s) {
        let len = stack.length;
        let concat = stack[len - 1] + i;

        if (len > 0 && concat == 'AB' || concat == 'CD') {
            stack.pop();
            continue;
        }

        stack.push(i);
    }

    return stack.length;
};