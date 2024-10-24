/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    let sortNums = nums.sort((a, b) => a - b);

    for (let i = 0; i + 1 < sortNums.length; i+=2) {
        arr.push(sortNums[i + 1]);
        arr.push(sortNums[i])
    }

    return arr;
};