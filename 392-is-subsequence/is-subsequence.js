/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length == 0 && t.length == 0) return true;
    if (s.length == 0 && t.length > 0) return true;
    
    let l = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (s[l] == t[i]) {
            l++;
        }
    }
    
    return l == s.length;
};