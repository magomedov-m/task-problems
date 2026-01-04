/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
 /* 
    duplicates = false
    not number - false
    [] - false
    negative number - false

    O(n)
    S(n)
 */
var sortBy = function(arr, fn) {
    let res = [];
    let mp = new Map();
    let startIdx = Infinity;

    for (let i of arr) {
        let key = fn(i);
        mp.set(key, i);

        startIdx = Math.min(startIdx, key);
    }

    while (mp.size != 0) {
        if (mp.has(startIdx)) {
            let elem = mp.get(startIdx);
            res.push(elem);
    
            mp.delete(startIdx);
        }
        
        startIdx++;
    }

    return res;
};