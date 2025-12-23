/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let mp = new Map();
    mp.set(0, -1);
    let res = 0;
    let sum = 0;
    
    for (let r = 0; r < nums.length; r++) {

        sum += nums[r] === 1 ? 1 : -1;

        if (mp.has(sum)) {
            res = Math.max(res, r - mp.get(sum));
        }else {
            mp.set(sum, r);
        }
    }

    return res;
};

// 010
//   ^