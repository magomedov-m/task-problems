/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let s1Arr = s1.split(' ');
    let s2Arr = s2.split(' ');
    let s1Mp = new Map();
    let s2Mp = new Map();
    
    for (let i of s1Arr) {
        if (i.toLowerCase() === i.toUpperCase()) {
            continue;
        }
        
        s1Mp.set(i, (s1Mp.get(i) || 0) + 1);
    }
    
    for (let j of s2Arr) {
        if (j.toLowerCase() === j.toUpperCase()) {
            continue;
        }
        
        s2Mp.set(j, (s2Mp.get(j) || 0) + 1);
    }
    
    let res = [];
    
    for (let [k, v] of s1Mp) {
        if (!s2Mp.has(k) && v === 1) {
            res.push(k);
        }
    }
    
    for (let [k, v] of s2Mp) {
        if (!s1Mp.has(k) && v === 1) {
            res.push(k);
        }
    }
    
    return res;
};