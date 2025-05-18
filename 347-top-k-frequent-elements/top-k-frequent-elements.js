/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // решена не полностью мной, (18.05.2025г.)
    let mp = new Map();
    let arr = new Array(nums.length + 1).fill().map(() => []);
    let res = [];

    for (let i of nums) {
        mp.set(i, mp.get(i) + 1 || 0);
    }

    for (let [i, j] of mp) {
        arr[j].push(i);
    }

    for (let i = nums.length - 1; i >= 0 && res.length < k; i--) {
        if (arr[i]) {
            res.push(...arr[i])
        }
    }

    return res;
}; 