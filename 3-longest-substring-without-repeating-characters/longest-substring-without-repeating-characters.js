/**
 * @param {string} s
 * @return {number}
 */
/*
Q:
 1. 0 <= str.length <= 5 * 10^4
 2. str consist eng lowerCase char, number, " "
 3. valid number - true

A:
 mp = []
 'abca'
   ^
     ^

Time: O(n)
Space: O(n)
*/
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;

    let mp = new Map();
    let l = 0;
    let r = 0;
    let maxLen = 0;

    while (r < s.length) {
        while (mp.has(s[r])) {
            mp.delete(s[l]);
            l++;
        }

        maxLen = Math.max(maxLen, r - l);
        mp.set(s[r]);
        r++;
    }

    return maxLen + 1;
};

/*
test:
1.
 abca
  ^
    ^

2.
 ''

3.
maxLen = 2;
 abcabcbb
       ^
        ^
*/