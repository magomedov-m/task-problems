/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for (let l = 0; l < nums.length; l++) {
        if (set.has(nums[l])) {
            return true;
        }
        set.add(nums[l]);
        if (set.size > k) {
            set.delete(nums[l - k]);
        }
        
    }

    return false;
};