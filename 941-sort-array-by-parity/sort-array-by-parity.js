/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if (nums.length < 2) {
        return nums;
    }

    let l = 0;
    let r = 0;

    while (r < nums.length) {
        if (nums[r] % 2 == 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }

    return nums;
};