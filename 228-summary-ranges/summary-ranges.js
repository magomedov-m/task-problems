/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length == 0) return nums;

    let res = [];
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 == nums[i + 1]) {
            continue;
        }else {
            if (i - left > 0) {
                res.push(`${nums[left]}->${nums[i]}`)
            }else {
                res.push(`${nums[i]}`)
            }

            left = i + 1;
        }
    }

    return res;
};