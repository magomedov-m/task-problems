/**
 * @param {string} s
 * @return {number}
 */

/*
'' - true
Pp - true

T(n)
S(n)
*/
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let l = 0;
    let buffer = new Set();

    for (let r = 0; r < s.length; r++) {

        while (buffer.has(s[r])) {
            buffer.delete(s[l]);
            l++;
        }

        max = Math.max(max, r - l + 1);

        buffer.add(s[r]);
    }

    return max;
};

/*
max = 1
buffer = a
s = abcabcb
    l
     r
*/