/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = '';
    let cur = s.split(' ');

    let l = 0;
    let r = cur.length - 1;

    while (l < r) {
        if (cur[l] == ' ') {
            l++;
        }else if (cur[r] == ' ') {
            r--
        }else {
            [cur[l], cur[r]] = [cur[r], cur[l]];
            l++;
            r--;            
        }
    }

    for (let i of cur) {
        if (i != '') {
            res += i + ' ';
        }
    }

    return res.trim();
};