/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0;
    
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[r], nums[l]] = [nums[l], nums[r]];
            l++
        }
    }

    return nums;
};