/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isChar(str) {
        let val = str.toLowerCase();
        return (val >= 'a' && val <= 'z') || (val >= '0' && val <= '9');
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isChar(s[l])) l++;
        while (l < r && !isChar(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};