/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i])) {
            let val = Math.abs(mp.get(nums[i]) - i);

            if (val <= k) return true;
        }
        mp.set(nums[i], i);
    }

    return false;
};