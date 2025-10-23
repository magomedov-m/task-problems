/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    let obj = {
        '}': '{',
        ')': '(',
        ']': '[',
    }

    for (let i of s) {
        if (!obj[i]) {
            stack.push(i);
            continue;
        }

        if (obj[i] && stack.length > 0) {
            if (obj[i] !== stack[stack.length - 1]) {
                return false;
                continue;
            }else {
                stack.pop();
                continue;
            }
        }

        if (obj[i] && stack.length == 0) return false;
    }

    return true && stack.length == 0;
};

// 4. '[()]'
//         ^
// stack = '' true

// 1. '(('
//      ^
// stack = '((' - false

// 2. '[]'
//       ^
// stack = '' true

// 3. ']]]'
//     ^
// stack = '' false
