/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let mp = new Map();
    let res = [];

    for (let i of nums1) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    for (let i of nums2) {
        if (mp.get(i) > 0) {
            res.push(i);
            mp.set(i, mp.get(i) - 1);
        }
    }

    return res;
};