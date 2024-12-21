/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !alphaNum(s[l])) {
            l++;
        }
        while (r > l && !alphaNum(s[r])) {
            r--
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++; r--;
    }  

    function alphaNum(el) {
        return (el >= 'A' && el <= 'Z' || el >= '0' && el <= '9' || el >= 'a' && el <= 'z')
    } 

    return true;
};

