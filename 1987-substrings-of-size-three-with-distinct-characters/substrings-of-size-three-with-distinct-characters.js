/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;

    if (s.length < 3) return 0;

    for (let i = 2; i < s.length; i++) {
        let flag = s[i] !== s[i - 1] && s[i] !== s[i - 2] && s[i - 1] !== s[i - 2];

        if (flag) count++
    }

    return count;
};