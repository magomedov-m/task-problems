/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let mp = new Map();
    let res = [];
    
    for (let i of nums1) {
        mp.set(i, (mp.get(i) ?? 0) + 1);
    }
    
    for (let j of nums2) {
        if (mp.get(j)) {
            res.push(j);
            mp.delete(j);
        }
    }
    
    return res;
};