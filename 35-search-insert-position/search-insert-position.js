/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === target) return i;
    // }

    // for (let j = 0; j < nums.length; j++) {
    //     if (target >= nums[j] && target <= nums[j + 1]) return j + 1;
    //     else if (target < nums[0]) return 0
    //     else if (target > nums[nums.length - 1]) return nums.length
    // }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }else if (nums[i] > target) {
            return i;
        }
    }

    return nums.length;
};