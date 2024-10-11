/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let answer = '';

    for (let i of s) {
        if (i === '(') {
            stack.push(i)
            if (stack.length > 1) {
                answer += i
            }
        }else if (i === ')' && stack.length > 1) {
            stack.pop()
            answer += i
        }else if (i === ')' && stack.length < 2) {
            stack.pop()
        }
    }

    return answer;
};