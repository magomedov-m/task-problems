/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == key) {
            let left = k > i + 1 ? 0 : i - k;
            let right = k > nums.length - 1 - i ? nums.length - 1 : i + k

            for (let j = left; j <= right; j++) {
                mp.set(j, true);
            }
        }
    }

    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (mp.has(i)) res.push(i);
    }

    return res;
};

// [1,2,3,4,5,6,7,8,9,10]
//                i