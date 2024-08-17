/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     const key = {
//         '(': ')', 
//         '[': ']',
//         '{': '}',
//     };

//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (key[s[i]]) {
//             stack.push(s[i])
//         }else if (s[i] !== key[stack.pop()]) {
//             return false;
//         }
//     }

//     return stack.length == 0;
// };

function isValid(s) {
    const stack = [];
    for (let i of s) {
        if (i === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        }else if (i === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        }else if (i === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        }else {
            stack.push(i);
        }
    }
    
    return !stack.length;
}