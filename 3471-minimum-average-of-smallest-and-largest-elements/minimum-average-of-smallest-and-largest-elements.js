/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);

    let l = 0;
    let r = nums.length - 1;
    let resMin = Infinity;

    while (l < r) {
        let value = (nums[r] + nums[l]) / 2;

        resMin = Math.min(resMin, value);

        l++;
        r--;
    }

    return resMin;
};