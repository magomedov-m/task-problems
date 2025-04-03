/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[r] > nums[mid]) {
            r = mid;
        }else {
            l = mid + 1;
        }
    }

    return nums[l];
};