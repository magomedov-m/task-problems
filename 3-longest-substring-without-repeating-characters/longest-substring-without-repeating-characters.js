/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) return s.length;
    
    let resLen = 1;
    let hs = new Set();
    let l = 0;
    
    for (let r = 0; r < s.length; r++) {
        while (hs.has(s[r])) {
            hs.delete(s[l]);
            l++;
        }
    
        hs.add(s[r]);
        resLen = Math.max(r - l + 1, resLen);
    }
    
    return resLen;
};
// abcabcbb
// l
//   r
// res = 
// set = 