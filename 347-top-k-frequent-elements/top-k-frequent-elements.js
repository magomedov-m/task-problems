/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let mp = new Map();
    let request = [];

    for (let i of nums) {
        if (mp.has(i)) {
            mp.set(i, mp.get(i) + 1);
        }else {
            mp.set(i, 1);
        }
    }

    let sortMap = [...mp.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        request.push(sortMap[i][0]);
    }

    return request;
};