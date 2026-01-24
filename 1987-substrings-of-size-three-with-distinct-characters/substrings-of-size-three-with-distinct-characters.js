/**
 * @param {string} s
 * @return {number}
 */
 /*
 s < 3 true
 lowercase en letters

 */
var countGoodSubstrings = function(s) {
    let mp = new Map();

    let l = 0;
    let count = 0;

    for (let r = 0; r < s.length; r++) {
        mp.set(s[r], (mp.get(s[r]) || 0) + 1);

        if (r - l + 1 > 3) {
            mp.set(s[l], mp.get(s[l]) - 1);
            if (mp.get(s[l]) === 0) mp.delete(s[l]);
            l++;
        }

        if (mp.size === 3) {
            count++;
        }
    }

    return count;
};

/*
mp = [b:1, ]
count = 0
s = "aababcabc"
      l
        r
*/