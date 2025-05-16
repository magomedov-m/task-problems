/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let arr1 = new Array(n);
    let arr2 = new Array(n);

    for (let i = 1; i < nums.length; i++) {
        arr1[0] = nums[0];
        arr1[i] = nums[i] * arr1[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        arr2[n - 1] = nums[n - 1]
        arr2[i] = nums[i] * arr2[i + 1];
    }

    let res = new Array(n);
    res[0] = arr2[1];
    res[n - 1] = arr1[n - 2];

    for (let i = 1; i < n - 1; i++) {
        res[i] = arr1[i - 1] * arr2[i + 1]
    }

    return res;
};