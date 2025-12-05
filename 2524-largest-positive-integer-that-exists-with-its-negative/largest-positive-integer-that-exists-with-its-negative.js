/**
 * @param {number[]} nums
 * @return {number}
 */
 // [] - false
 // every elem < 0 - true
 // every elem > 0 - true
 // duplicates - true

var findMaxK = function(nums) {
    nums.sort((a, b) => a - b);

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let val = nums[l] * -1;

        if (nums[r] > val) {
            r--;
        }else if (nums[r] < val) {
            l++;
        }else {
            return nums[r];
        }
    }

    return -1;
};