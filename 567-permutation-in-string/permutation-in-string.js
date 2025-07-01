/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let mp = new Map();

    for (let i of s1) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    for (let l = 0; l < s2.length; l++) {
        let r = l;
        let copy = new Map(mp);

        while (r - l <= s1.length) {
            if (r - l == s1.length) {
                return true;
            }else if (copy.get(s2[r]) > 0) {
                copy.set(s2[r], copy.get(s2[r]) - 1);
            }else {
                break;
            }

            r++;
        }
    }

    return false;
};