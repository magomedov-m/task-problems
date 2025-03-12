/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let mp = new Map();

    let l = 0;
    let maxLen = 0;
    let maxValue = -Infinity;

    // for (let r = 0; r < s.length; r++) {
    //     mp.set(s[r], (mp.get(s[r]) || 0) + 1);
    //     minValue = Math.min(minValue, mp.get(s[r]));

    //     while (minValue > k) {
    //         mp.set(s[l], mp.get(s[l]) - 1);
    //         l++;
    //     }
    //     maxLen = Math.max(res, r - l + 1);
    // }

    for (let r = 0; r < s.length; r++) {
        mp.set(s[r], (mp.get(s[r]) || 0) + 1);
        maxValue = Math.max(mp.get(s[r]), maxValue);

        while((r - l + 1) - maxValue > k) {
            mp.set(s[l], mp.get(s[l]) - 1);
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
};