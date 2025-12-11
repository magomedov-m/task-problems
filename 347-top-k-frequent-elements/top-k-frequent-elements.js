/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = [];
    let curArr = new Array(nums.length + 1).fill(null).map(() => []);
    let mp = new Map();
    
    for (let i of nums) {
        mp.set(i, (mp.get(i) || 0) + 1);
    }
    
    for (let [k, v] of mp) {
        curArr[v].push(k);
    }
    
    let r = curArr.length - 1;
    
    while (k > 0) {
        if (curArr[r].length > 0) {
            res.push(...curArr[r]);
            k -= curArr[r].length;
        }

        r--;
    }
    
    return res;
};