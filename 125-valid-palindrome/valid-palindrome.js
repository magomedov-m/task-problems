/**
 * @param {string} s
 * @return {boolean}
 */
 // ru, en
 // '' - false
 // any char - true
 /// include numbers - true
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    function isChar(c) {
        // цифра
        if (c >= '0' && c <= '9') return true;
        // буква
        if (c.toLowerCase() !== c.toUpperCase()) return true;
        return false;
    }

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

// 0P
// l
//  r

// 'Race, a Car'
//     l
//        r

// Казак
//   l
//   r