/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        mp.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];

        if (mp.has(val) && mp.get(val) != i) {
            return [mp.get(val), i]
        }
    }
};