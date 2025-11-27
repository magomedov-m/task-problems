/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [];
    let mp = new Map();

    for (let i of nums) {
        if (mp.has(i)) {
            res.push(i);
        }else {
            mp.set(i, true);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!mp.has(i)) {
            res.push(i);
            break;
        }
    }

    return res;
};