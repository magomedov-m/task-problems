/**
 * @param {string[]} tokens
 * @return {number}
 */
// var evalRPN = function(tokens) {
//     let st = [];

//     for (let c of A) {
//         if (c == '+') {
//             let sec = +st.pop();
//             let first = +st.pop();
//             st.push(first + sec);
//         }else if (c == '-') {
//             let sec = +st.pop();
//             let first = +st.pop();
//             st.push(first - sec);
//         }else if (c == '*') {
//             let sec = +st.pop();
//             let first = +st.pop();
//             st.push(first * sec);
//         }else if (c == '/') {
//             let sec = +st.pop();
//             let first = +st.pop();
//             st.push(Math.trunc(first / sec));
//         }else {
//             st.push(c);
//         }
//     }

//     return st[0];
// };

var evalRPN = function(tokens) {
    const stack = [];
    
    for (let i of tokens) {
        if (i === '+') {
            stack.push(stack.pop() + stack.pop())
        }else if (i === '*') {
            stack.push(stack.pop() * stack.pop())
        }else if (i === '-') {
            let first = stack.pop()
            let sec = stack.pop()
            stack.push(sec - first)
        }else if (i === '/') {
            let first = stack.pop()
            let sec = stack.pop()
            stack.push(Math.trunc(sec / first))
        }else {
            stack.push(Number(i));
        }
    }
    
    return stack[0];
}