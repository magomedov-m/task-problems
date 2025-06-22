/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
Q:
 1. s.len > t.len - true
 2. only eng lowerCase char
 3. '' - true

A:
 abc
   ^
 ahbgdc
      ^

Time: O(n)
Space: O(1)
*/
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;

    let l = 0;
    
    for (let i of t) {
        if (i == s[l]) {
            l++;
        }
    }

    return l == s.length;
};

/*
test:
 1.
 'ab'
   ^
 'acg'
    ^

 2.
 'axn'
    ^
 'vancx'
      ^
*/
