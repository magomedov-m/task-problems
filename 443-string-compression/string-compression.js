/**
 * @param {character[]} chars
 * @return {number}
 */
/*
Q:
 1. sorted - false
 2. only eng char - false
 3. chars len = 0 - false

A:
 two pointers

 a b b c
 ^
 w 
    ^

 a a b b c c c
 ^
     ^
   w
 
 a b 1 1 b b b b b b b b c
                         ^
                         ^
         w
*/
var compress = function(chars) {
    let l = 0;
    let r = 0;

    while (r < chars.length) {
        let current = chars[r];
        let count = 0;

        while (r < chars.length && chars[r] === current) {
            count++;
            r++;
        }

        chars[l++] = current;

        if (count > 1) {
            let countStr = count.toString();

            for (let i = 0; i < countStr.length; i++) {
                chars[l++] = countStr[i];
            }
        }
    }

    return l;
}
/*
test:
 a 2 b 2 c c c
         ^
             ^
           w
*/