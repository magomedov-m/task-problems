/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let mp = new Map();
    let l = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {

        mp.set(s[r], (mp.get(s[r]) || 0) + 1);

        while (mp.get(s[r]) > 2) {
            mp.set(s[l], mp.get(s[l]) - 1);
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        
    }

    return maxLen;
};