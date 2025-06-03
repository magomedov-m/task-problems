/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    let mp = new Map();

    for (let i of nums1) {
        mp.set(i, true);
    }

    for (let i of nums2) {
        if (mp.has(i)) {
            res.push(i);
            mp.delete(i);
        }
    }

    return res;
};