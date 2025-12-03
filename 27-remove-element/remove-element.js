/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  nums = [] - false
//  val !includes nums - false
//  resSort - false

var removeElement = function(nums, val) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        while (nums[r] == val) r--;

        if (nums[l] == val) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l--;
        }

        l++;
    }

    return l;
};

// 2
// ^
// ^

// 2 2 3 3
//   ^
//   ^

// 1 2 4 3 3
//     ^
//     ^