/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let mp = new Map();
    let maxLen = 0;

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        mp.set(nums[right], (mp.get(nums[right]) ?? 0) + 1);
        
        while (mp.get(nums[right]) > k) {
            if (mp.get(nums[left]) > 1) {
                mp.set(nums[left], mp.get(nums[left]) - 1);
            }else {
                mp.delete(nums[left]);
            }

            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};