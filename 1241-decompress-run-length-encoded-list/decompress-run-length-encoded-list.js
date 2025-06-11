/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    
    for (let i = 0; i < nums.length - 1; i += 2) {
        let count = nums[i];

        while (count > 0) {
            res.push(nums[i + 1]);
            count--;
        }
    }

    return res;
};