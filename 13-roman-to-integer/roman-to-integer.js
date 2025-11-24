/**
 * @param {string} s
 * @return {number}
 */
 // "" - false
 // only roman num - true
 // only right - true

 // O(n)
 // S(1)
var romanToInt = function(s) {
    let len = s.length;

    let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let res = 0;

    for (let i = 0; i < len - 1; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            res -= obj[s[i]]
        }else {
            res += obj[s[i]]
        }
    }

    res += obj[s[len - 1]];

    return res;
};

// res = 3
// III
//  ^|

// res = 1994
// MCMXCIV
//       ^