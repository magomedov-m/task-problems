/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 // '' - false
 // only up case en
 // AAAAA
 // k == 0 - true
var characterReplacement = function(s, k) {
    let max = 0;
    let cur = 0;
    let mp = new Map(); // a:2 
    let l = 0;

    for (let i = 0; i < s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) ?? 0) + 1);
        cur = Math.max(cur, mp.get(s[i]));

        while (i - l + 1 - cur > k) {
            mp.set(s[l], mp.get(s[l]) - 1);
            l++;
        }

        max = Math.max(max, i - l + 1);
    }

    return max;
};


// aababba
// l
//   i