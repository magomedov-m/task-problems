/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let minElems = 0;
    let targetElem = 0;

    for (let i of nums) {
        if (i < target) {
            minElems ++;
        }else if (i == target) {
            targetElem ++;
        }
    }

    let resNums = [];

    for (let i = minElems; i < minElems + targetElem; i++) {
        resNums.push(i);
    }

    return resNums;
};