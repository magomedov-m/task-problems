/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        if (nums[r] != 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }

    return nums;
};