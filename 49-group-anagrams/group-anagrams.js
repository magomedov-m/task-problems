/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};

    for (let i of strs) {
        if (!res[i.split('').sort().join('')]) {
            res[i.split('').sort().join('')] = []
            res[i.split('').sort().join('')].push(i)
        }else {
            res[i.split('').sort().join('')].push(i);
        }
    }

    return Object.values(res);
};