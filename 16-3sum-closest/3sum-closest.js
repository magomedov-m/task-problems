/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // задача несложная. решить можно спокойно. главное подумать тоже спокойно
    let min = Infinity;
    let res = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            let curVal = Math.abs(sum - target);

            if (curVal < min) {
                res = sum;
                min = curVal;
            }

            if (sum == target) {
                return sum;
            }else if (sum > target) {
                r--;
            }else {
                l++;
            }
        }
    }

    return res;
};