/**
 * @param {number[]} nums
 * @return {string[]}
 */

/*
Q:
 1. [] - true
 2. valid number - false
 3. sorted - true
 4. duplicates - false

A:
two pointers

res = []
str = ''
 1 2 4 5 7
         ^
         ^

Time: O(n + k)
Space: O(1)
*/
var summaryRanges = function(nums) {
    if (!nums.length) return [];

    let res = [];
    let str = '';
    let l = 0;
    let r = 0;

    while (r < nums.length) {

        if (r == nums.length - 1 || nums[r + 1] - nums[r] > 1) {
            if (nums[r] != nums[l]) {
                str += `${nums[l]}->${nums[r]}`
                res.push(str);
                str = '';

                l = r + 1;
            }else {
                str += `${nums[l]}`
                res.push(str);
                str = ''
                l++
            }
        }
        r++;
    }

    return res;
};

/*
str = ''
res = ['0->2', '4->5', '', ]
r = 0
l = 0

 0 1 2 4 5 7
           ^
           ^
*/