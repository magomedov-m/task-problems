/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0;
    let r = 0;

    let sum = 0;
    let minLen = Infinity;

    for (r; r < nums.length; r++) {
        sum += nums[r];

        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};