/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    let sum = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let curSum = nums[i] + nums[l] + nums[r];
            let val = Math.abs(curSum - target);

            if (val < closest) {
                closest = val;
                sum = curSum;
            }
            
            if (curSum > target) {
                r--;
            }else if (curSum < target) {
                l++;
            }else {
                return target;
            }
        }
    }

    return sum;
};