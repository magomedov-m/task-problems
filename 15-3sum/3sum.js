/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
Q:
 1. 3 <= nums.length <= 3000
 2. -10^5 <= nums[i] <= 10^5
 3. 

A:
 -1 1 0
  ^
    ^
      ^
Time: O(n^3);
Space: O(1)
*/
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        while (l < r) {
            let curVal = nums[l] + nums[r] + nums[i];

            if (curVal == 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;

                while (nums[l] == nums[l - 1]) l++;
                while (nums[r] == nums[r + 1]) r--;
            }else if (curVal > 0) {
                r--;
            }else {
                l++;
            }
        }
    }

    return res;
};
/*
 [[1, 0, -1], [-1, 2, -1], []]
 -1 0 1 2 -1 -4
 -4 -1 -1 0 1 2
    i
      j
           c
*/