/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let l = 0;
    let r = 0;
    let count = 0;
    let maxLen = 0;

    while (r < nums.length) {
        if (nums[r] == 0) {
            count++;
        }

        while (count > 1) {
            if (nums[l] == 0) {
                count--;
            }
            l++;
        }

        if (r == nums.length - 1 && l == 0) {
            return nums.length - 1;
        }
        
        r++;
        maxLen = Math.max(maxLen, r - l - 1);
    }

    return maxLen;
};