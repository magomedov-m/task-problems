/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let set = new Set(nums.filter((e) => e > 0));

    return set.size;
};