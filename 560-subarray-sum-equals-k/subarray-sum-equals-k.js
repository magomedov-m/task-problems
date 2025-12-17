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

        if (mp.has(total - k)) {
            count += mp.get(total - k);
        }

        mp.set(total, (mp.get(total) || 0) + 1);
    }

    return count;
};

// mp = 0:1; 1:1; 3:1; 6:1
// count = 2
// total = 6
// k = 3
// 1 2 3
//      ^