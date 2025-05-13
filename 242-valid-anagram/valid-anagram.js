/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mp1 = new Map();
    let mp2 = new Map();

    for (let i of s) {
        mp1.set(i, mp1.get(i) + 1 || 0);
    }
    for (let i of t) {
        mp2.set(i, mp2.get(i) + 1 || 0);
    }

    if (mp1.size !== mp2.size) return false;

    for (let [i, j] of mp1.entries()) {
        if (mp2.get(i) !== j) {
            return false;
        } 
    }

    return true;
};