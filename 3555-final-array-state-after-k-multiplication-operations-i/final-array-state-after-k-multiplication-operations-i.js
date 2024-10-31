/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while (k > 0) {
        let value = Math.min(...nums);
        let minIndex = nums.indexOf(Math.min(...nums));
        nums[minIndex] = value * multiplier;
        k--;
    }

    return nums;
};