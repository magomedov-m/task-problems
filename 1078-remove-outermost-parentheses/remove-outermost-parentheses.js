/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count = 0;
    let res = '';

    for (let i of s) {
        if (i == '(') {
            count++;

            if (count > 1) {
                res += i;
            }
        }else {
            count--;

            if (count > 0) {
                res += i;
            }
        }
    }

    return res;
};

// count = 0
// res = '()()()'
// (()())(())
//          ^