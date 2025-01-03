/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let curr = 1;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) continue;
        
        if (nums[i + 1] === nums[i] + 1) {
            curr++;
        }else {
            max = Math.max(curr, max);
            curr = 1;
        }
    }

    return max;
};