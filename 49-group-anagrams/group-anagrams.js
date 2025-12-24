/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let mp = new Map();
    let res = [];
    
    for (let i of strs) {
        let curStr = i.split('').sort().join('');
        
        if (mp.has(curStr)) {
            mp.get(curStr).push(i);
        }else {
            mp.set(curStr, [i]);
        }
    }
    
    for (let [k, v] of mp) {
        res.push(v);
    }
    
    return res;
}