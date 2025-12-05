/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let idxArr = [];
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) idxArr.push(i);
    }

    for (let j = 0; j < s.length; j++) {
        let minVal = Infinity;

        for (let el = 0; el < idxArr.length; el++) {
            let abs = Math.abs(idxArr[el] - j);
            minVal = Math.min(abs, minVal);
        }

        res.push(minVal);
    }

    return res;
};