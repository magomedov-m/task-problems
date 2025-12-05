/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [];

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let val1 = nums[l] ** 2;
        let val2 = nums[r] ** 2;

        if (val1 < val2) {
            res.unshift(val2);
            r--;
        }else if (val1 >= val2) {
            res.unshift(val1);
            l++;
        }
    }

    return res;
};

// -4 -2 1 4
//       ^
//       ^
//  1  4  16  16