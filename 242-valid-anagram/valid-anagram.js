/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

        let mp1 = new Map();
        let mp2 = new Map();

        for (let i of s) {
            if (mp1.has(i)) {
                mp1.set(i, mp1.get(i) + 1)
            }else {
                mp1.set(i, 1);
            }
        }

        for (let i of t) {
            if (mp2.has(i)) {
                mp2.set(i, mp2.get(i) + 1)
            }else {
                mp2.set(i, 1);
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (mp1.get(s[i]) !== mp2.get(s[i])) {
                return false
            }
        }

        return true
};