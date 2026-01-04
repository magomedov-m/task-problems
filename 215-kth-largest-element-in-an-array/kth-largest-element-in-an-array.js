/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let res = [];
    let mp = new Map();
    let startIdx = Infinity;

    for (let i of nums) {
        let curArr = mp.get(i) ?? [];
        curArr.push(i);
        mp.set(i, curArr);
        startIdx = Math.min(startIdx, i);
    }

    while (mp.size !== 0) {
        if (mp.has(startIdx)) {
            let subArr = mp.get(startIdx);

            res.push(...subArr);
            mp.delete(startIdx);

        }

        startIdx++;
    }

    return res[res.length - k];
};

/*
[3,2,1,5,6,4]
           i
[6, 5]
*/ 