/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /*
 [] - false
 only positive

 first el 0 - true
 [0] - true

 */
var canJump = function(nums) {
    let len = nums.length;
    let goal = len - 1;

    for (let i = len - 1; i >= 0; i--) {
        let range = nums[i] + i;

        if (i === 0 && range >= goal) {
            return true;
        }

        if (range >= goal) {
            goal = i;
        }
    }

    return false;
};

/*
goal = 1
range = 2

0 1 2 3 4
2 3 1 1 4
i
*/