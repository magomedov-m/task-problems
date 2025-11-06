/**
 * @param {string} s
 * @return {number}
 */
// [, { - false
// ((null)) - true
// (() - false
// 1 <= s.length <= 100
// letters - false
// stack

// val = 2
// []
// () + (())
//         ^
var maxDepth = function(s) {
    let stack = [];
    let val = 0;

    for (let i of s) {
        if (i == '(') {
            stack.push('(');
        }else if (i == ')') {
            val = Math.max(val, stack.length);
            stack.pop();
        }
    }

    return val;
};

// val = 3
// []
// (1+(2*3)+((8)/4))+1
//                 ^