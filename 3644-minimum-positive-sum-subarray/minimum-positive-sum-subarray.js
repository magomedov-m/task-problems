/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {

    let minSum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let cur = 0;

        for (let j = i; (j - i) < r && j < nums.length; j++) {
            cur += nums[j];

            if (j - i + 1 >= l && cur > 0) {
                minSum = Math.min(minSum, cur);
            }

        }
    }

    return minSum == Infinity ? -1 : minSum;
};

