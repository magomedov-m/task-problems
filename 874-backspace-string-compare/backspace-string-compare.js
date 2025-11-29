/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // s, t '' - false
 // s, t contains only lowercase & #

// [ac]
// ab#c
//    ^
// []
// a##

var backspaceCompare = function(s, t) {
    let stackS = [];
    let stackT = [];

    for (let i of s) {
        if (i == '#') {
            stackS.pop();
        }else {
            stackS.push(i);
        }
    }

    for (let j of t) {
        if (j == '#') {
            stackT.pop();
        }else {
            stackT.push(j);
        }
    }

    let resS = stackS.join('');
    let resT = stackT.join('');

    return resS === resT;
};

// [f]
// y#fo##f
//       ^