/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = new Array(nums.length).fill(0);
    let l = 0;
    let r = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[r]) >= Math.abs(nums[l])) {
            res[i] = nums[r] ** 2;
            r--;
        }else {
            res[i] = nums[l] ** 2;
            l++
        }
    }

    return res;
};