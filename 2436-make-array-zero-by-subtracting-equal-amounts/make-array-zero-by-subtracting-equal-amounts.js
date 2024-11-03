/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;

    while (true) {
        let minElem = Math.min(...nums.filter(num => num > 0));

        if (minElem === Infinity) break;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[i] -= minElem;
            }
        }

        operations++;
    }

    return operations;
};