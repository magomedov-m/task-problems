/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    if (nums.length == 1) return 1;

    let countZeroes = 0;
    let l = 0;
    let maxLen = 0;

    for (let r = 0; r < nums.length; r++) {

        if (nums[r] === 0) {
            countZeroes++;
        }

        while (countZeroes > k) {
            if (nums[l] === 0) {
                countZeroes--;
            }
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
};