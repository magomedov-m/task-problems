/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(A) {
    let st = [];

    for (let c of A) {
        if (c == '+') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(first + sec);
        }else if (c == '-') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(first - sec);
        }else if (c == '*') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(first * sec);
        }else if (c == '/') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(Math.trunc(first / sec));
        }else {
            st.push(c);
        }
    }

    return st[0];
};