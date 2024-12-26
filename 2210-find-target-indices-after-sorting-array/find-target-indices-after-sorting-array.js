/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let ans = [];
    let cur = 0;
    let elemQuantity = 0;

    for (let i of nums) {
        if (i < target) {
            cur++;
        }else if (i == target) {
            elemQuantity++;
        }
    }

    while (elemQuantity != 0) {
        ans.push(cur);
        cur++;
        elemQuantity--;
    }

    return ans;
};