/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 // bad/n = 0 - false;
 // 
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n == 1) return n;

        let l = 0;
        let r = n - 1;

        while (l <= r) {
            let mid = Math.floor((r - l) / 2) + l;
        
            if (isBadVersion(mid)) {
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }

        return l;
    };
};

// l = 4; r = 4; m = 3;
// bad = 4
// [1, 2, 3, 4, 5];
//           l
//           m
//           r

// []