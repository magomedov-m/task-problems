/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length == 1) return true;
    let incrase = null;

    let r = 1;
    while (nums[r] === nums[0]) r++;

    if (nums[0] < nums[r]) {
        incrase = true;
    }else if (nums[r] < nums[0]) {
        incrase = false;
    }

    for (let r = 1; r < nums.length; r++) {
        let right = nums[r];
        let left = nums[r - 1];

        if (right > left && incrase === false) {
            return false;
        }else if (right < left && incrase === true) {
            return false;
        }
    }

    return true;
};

/*
inc = true
1 2 2
  r

inc = null
1 1 0

*/