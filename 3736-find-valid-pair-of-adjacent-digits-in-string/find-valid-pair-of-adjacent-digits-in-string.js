/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let mp = new Map();

    for (let i of s) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == mp.get(s[i]) && s[i + 1] == mp.get(s[i + 1]) && s[i] != s[i + 1]) {
            return `${s[i]}${s[i + 1]}`
        }
    }

    return '';
};