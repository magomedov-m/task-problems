/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLen = 0;
    let l = 0;
    let r = 0;
    let count = 0;

    while (r < nums.length) {
        if (nums[r] == 0) {
            count++;
        }

        while (count > k) {
            if (nums[l] == 0) {
                count--;
            }
            l++;
        }
        
        maxLen = Math.max(maxLen, r - l + 1);

        r++;
        
    }

    return maxLen;
};