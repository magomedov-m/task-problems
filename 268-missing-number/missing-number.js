/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let mp = new Map();

    for (let i of nums) {
        mp.set(i, true);
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!mp.has(i)) {
            return i;
        }
    }
};


// [3-true, 0-true, 1-true]
// [3, 0, 1]
//        ^
// i = 2

// [1-true]
// [1]
//  ^
// i = 0

// [0-true]
// [0]
//    ^
// i = 1