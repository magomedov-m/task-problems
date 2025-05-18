/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let mp = new Map();
    let arr = new Array(nums.length + 1).fill().map(() => []);
    let resArr = [];

    for (let i of nums) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    for (let [i, j] of mp) {
        arr[j].push(i);
    }

    for (let i = arr.length - 1; i >= 0 && resArr.length < k; i--) {
        if (arr[i]) {
            resArr.push(...arr[i]);
        }
    }

    return resArr.slice(0, k);
}; 