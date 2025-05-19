/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mp = new Map();

    for (let i of nums) {
        if (mp.has(i)) {
            return true;
        }
        
        mp.set(i, mp.get(i) + 1 || 0);
    }

    return false
};