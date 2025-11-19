/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // 1 <= n.len <= 10^5
 // +- digit - true
 // target < nums[0] || target > nums[-1] - false
 // duplicates - false
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;

        if (nums[mid] == target) {
            return mid;
        }else if (nums[mid] < target) {
            l = mid + 1;
        }else {
            r = mid - 1;
        }
    }

    return l;
};
// mid = 0
// l = 0; r = 4
// [1, 3, 5, 6];
//           l
//        m
//           r
//  target = 7