/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 // '' - false
 // only lowercase en letter
 // duplicates - true
var reversePrefix = function(word, ch) {
    let stack = [];
    let res = word.split(''); // a b c d e f d
    let idx = 0;

    for (let i = 0; i < res.length; i++) {
        stack.push(res[i]);

        if (res[i] == ch) {
            while (stack.length > 0) {
                res[idx] = stack.pop();
                idx++;
            }

            break;
        }

    }

    return res.join('');
};
// ch = d
// stack = 
// res = [d c b a e f d]
//              i
//              |
// idx = 0
//