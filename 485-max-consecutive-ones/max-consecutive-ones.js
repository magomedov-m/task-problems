/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            current++
        }else {
            if (current > max) {
                max = current
            }
            current = 0
        }
    }

    return Math.max(current, max)
};