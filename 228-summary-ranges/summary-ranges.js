/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length < 1) return [];
    
    let res = [];
    let l = 0;
    let r = 0;

    for (r; r < nums.length - 1; r++) {
        if (nums[r + 1] - nums[r] > 1) {
            if (nums[r] === nums[l]) {
                res.push(`${nums[r]}`);
                l = r + 1;
            }else {
                res.push(`${nums[l]}->${nums[r]}`);
                l = r + 1;
            }
        }
    }

    while (r < nums.length) {

        if (nums[l] === nums[r]) {
            res.push(`${nums[r]}`);
        }else {
            res.push(`${nums[l]}->${nums[r]}`)
        }
        r++
    }

    return res
};

// 1 2 4 5 8 10 11 12 13
//             l
//                  r