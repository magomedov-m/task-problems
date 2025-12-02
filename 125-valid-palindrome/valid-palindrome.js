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

    function isChar(char) {
        if (char >= '0' && char <= '9') return true;

        return char.toUpperCase() != char.toLowerCase()
    }

    while (l < r) {
        if (isChar(s[l]) && isChar(s[r])) {
            if (s[l].toLowerCase() != s[r].toLowerCase()) {
                return false;
            }else {
                l++;
                r--;
            }
        }else if (!isChar(s[l])) {
            l++
        }else if (!isChar(s[r])) {
            r--;
        }
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