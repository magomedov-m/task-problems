/**
 * @param {string} s
 * @return {string}
 */
 // only lowercase en letters - true
 // '' - false
 // bbbb/aaa/dddd
var removeDuplicates = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let n = stack.length;

        if (stack.length && stack[n - 1] == s[i]) {
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }

    return stack.join('');
};
// stack = [ca]
// abbaca
//      ^

// abbaca
//     ^
// stack = []