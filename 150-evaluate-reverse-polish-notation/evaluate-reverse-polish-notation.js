/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(A) {
    let st = [];

    for (let c = 0; c < A.length; c++) {
        if (A[c] == '+') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(first + sec);
        }else if (A[c] == '-') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(first - sec);
        }else if (A[c] == '*') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(first * sec);
        }else if (A[c] == '/') {
            let sec = +st.pop();
            let first = +st.pop();
            st.push(Math.trunc(first / sec));
        }else {
            st.push(A[c]);
        }
    }

    return st[0];
};