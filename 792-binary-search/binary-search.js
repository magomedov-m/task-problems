/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // [] - false
 // sorted - true
 // duplicates - false
 // 
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;

        if (nums[mid] == target) {
            return mid;
        }else if (nums[mid] > target) {
            r = mid - 1;
        }else {
            l = mid + 1;
        }
    }

    return -1;
};

// [1, 2, 3, 4]
//     m
// l = 0; r = 3;
// t = 2

//            l     r
// [-1, 0, 3, 5, 9, 12]
//               ^
// l = 3; r = 5;
// mid = 2