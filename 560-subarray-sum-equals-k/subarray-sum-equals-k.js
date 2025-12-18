/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let total = 0;

    let mp = new Map();
    mp.set(0, 1);

    for (let i of nums) {
        total += i;

        count += mp.get(total - k) ?? 0;

        mp.set(total, (mp.get(total) ?? 0) + 1);
    }

    return count;
};