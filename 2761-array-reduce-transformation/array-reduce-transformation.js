/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }

    let res = init;

    for (let i of nums) {
        res = fn(res, i);    
    }

    return res;
};