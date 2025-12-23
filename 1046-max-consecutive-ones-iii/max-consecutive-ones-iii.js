/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0;
    let count = 0;
    let res = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            count++;
        }

        while (count > k) {
            if (nums[l] === 0) {
                count--;
            }
            l++;
        }

        res = Math.max(res, r - l + 1);
    }

    return res;
};