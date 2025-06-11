/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
Q:
 1. s > t - true
 2. s || t == 0 - true
 3. char - eng, lowercase

A:
 count = 2
 abc
   ^
 ahbgdc
      ^

 abcd
 abc

Time: O(n);
Space: O(1)
*/
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;

    let count = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[count]) {
            count++;
        }
    }

    if (count == s.length) return true;

    return false;
};

/*
test:
 count = 1
 axc
  ^
 ahbgdc
      ^

 
*/