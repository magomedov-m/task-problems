/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = [];

    for (let i of nums1) {
        let x = -1
        for (let j = nums2.length - 1; nums2[j] != i; j--) {
            if (nums2[j] > i) x = nums2[j]
        }
        res.push(x)
    }

    return res;
};