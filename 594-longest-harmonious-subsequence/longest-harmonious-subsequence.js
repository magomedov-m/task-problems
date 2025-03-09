/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let max = 0;

    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        while (nums[r] - nums[l] > 1) {
            l++
        }

        if (nums[r] - nums[l] === 1) {
            max = Math.max(max, r - l + 1);
        }
    }

    return max;
};