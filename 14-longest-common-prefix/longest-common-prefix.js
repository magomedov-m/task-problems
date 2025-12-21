/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let str = strs[0];

    for (let i of strs) {
        if (i.length < str.length) {
            str = i;
        }
    }

    

    while (str.length > 0) {
        let flag = true;
        let n = str.length;

        for (let i of strs) {
            let curStr = i.slice(0, n);

            if (curStr !== str) {
                str = str.slice(0, n - 1);
                flag = false;
                break;
            }
        }

        if (flag) {
            return str;
        }
    }

    return str;
};