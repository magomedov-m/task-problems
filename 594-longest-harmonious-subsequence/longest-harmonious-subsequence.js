/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let mp = new Map();

    for (let i of nums) {
        mp.set(i, (mp.get(i) + 1) || 1);
    }

    let max = 0;

    for (let i of nums) {
        if (mp.get(i + 1)) {
            let cur = mp.get(i) + mp.get(i + 1);
            max = Math.max(cur, max);
        }
    }

    return max;
};