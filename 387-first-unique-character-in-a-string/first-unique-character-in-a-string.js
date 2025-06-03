/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mp = new Map();
    
    for (let i of s) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (mp.get(s[i]) == 1) return i;
    }

    return -1
};