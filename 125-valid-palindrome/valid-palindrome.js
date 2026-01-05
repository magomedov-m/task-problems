/**
 * @param {string} s
 * @return {boolean}
 */

/*
*/

var isPalindrome = function(s) {
    function isChar(str) {
        if (str >= '0' && str <= '9') {
            return true;
        }

        return str.toUpperCase() !== str.toLowerCase();
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isChar(s[l])) {
            l++
        }
        while (r > l && !isChar(s[r])) {
            r--;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};

/*
0p
l
 r
*/