/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(st, s) {
    let flag = true;
    let operations = 0;

    while (st.length > 0 && flag) {

        if (st[0] != s[0]) {
            let val = st.shift();
            st.push(val);
            operations++;

            if (operations == st.length) flag = false;
        }else {
            st.shift();
            s.shift();

            operations = 0;
        }
    }

    return st.length;
};

// operations = 3
// 1 1 1 - st
// 0 1 1- s