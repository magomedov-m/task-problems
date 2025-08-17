/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== val) {
            nums[l] = nums[r];
            l++;
        }
    }

    return l;
};