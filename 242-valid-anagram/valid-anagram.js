/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mp = new Map();
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i)
    }

    for (let i of s) {
        if (isLetter(i)) {
            mp.set(i, (mp.get(i) || 0) + 1);
        }
    }

    for (let j of t) {
        if (isLetter(j)) {
            if (mp.has(j)) {
                mp.set(j, mp.get(j) - 1);
            }else {
                mp.set(j, -1);
            }
        }
    }

    for (let [i, j] of mp.entries()) {
        if (j != 0) return false;
    }

    return true;
}; 