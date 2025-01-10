/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let s2 = '';
    let res = {};

    for (let i of strs) {
        s2 = i.split('').sort().join('');

        if (!res[s2]) {
            res[s2] = [];
        }

        res[s2].push(i);
        s2 = '';
    }

    return Object.values(res);
};