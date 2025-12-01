/**
 * @param {string} s
 * @return {number}
 */
 // '' - false
 // not AB, CD - true
var minLength = function(s) {
    let stack = [];
    
    for (let i of s) {

        if (stack.length > 0 && stack[stack.length - 1] + i == 'AB' || stack[stack.length - 1] + i == 'CD') {
            stack.pop();
            continue;
        }

        stack.push(i);
    }

    return stack.length;
};