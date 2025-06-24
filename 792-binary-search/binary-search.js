/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Q:
 1. nums.length = 0 - false
 2. item - -10^4 / 10^4

A: 
bin search
t = 4
1 2 3 4 6 7
      ^
      ^
      m

Time: O(log n)
Space: O(1)    
*/
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);

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

/*
test:
1.
 t = 1 
 1 3 5 6
 ^
 ^
 m
*/