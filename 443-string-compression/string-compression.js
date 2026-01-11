/**
 * @param {character[]} chars
 * @return {number}
 */

 /*
 en letters low/up case, num, symbol - true
 [] - true
 [a a a b b a a c a] - false

 O(n)
 O(n)
 */
var compress = function(chars) {
    if (chars.length < 2) return 1;

    let s = '';
    let count = 1;

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] !== chars[i - 1]) {
            s += chars[i - 1];

            if (count > 1) {
                s += count;
            }

            count = 0;
        }

        count++;
    }

    if (count > 0) {
        s += chars[chars.length - 1];
        
        if (count > 1) {
            s += count;
        }
    }

    for (let j = 0; j < s.length; j++) {
        chars[j] = s[j];
    }

    return s.length;
};

/*
s = ab2
count = 2

a b b
    i
*/