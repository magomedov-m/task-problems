/**
 * @param {number[]} nums
 * @return {number}
 */
 // sorted - true
 // [] - false
 // all duplicates - [1 1 1 1 1]
var removeDuplicates = function(nums) {
    let l = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[l]) {
            l++;
            [nums[l], nums[i]] = [nums[i], nums[l]];
        }
    }

    return l + 1;
};

// 0 1 2 3 4 0 2 1 3 4
        //    ^
                    //  ^
// 0 1 2 2
    //    ^
    //    ^