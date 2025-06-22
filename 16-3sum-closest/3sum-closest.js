/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Q:
 1. 3 <= nums.length <= 500
 2. item +-1000
 3. valid number - false
 4. sorted - false
 5. sum items = target

A:
 t = 3
 minVal = 1

 -1 -2 2 4 3
 -2 -1 2 3 1
       i
         ^ 
           ^

Time: O(n * k);
Space: O(1);
*/
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let minVal = Infinity;
    let res = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let cur = Math.abs(nums[l] + nums[i] + nums[r] - target);
            let val = nums[l] + nums[i] + nums[r];

            if (cur < minVal) {
                minVal = Math.abs(cur);
                res = val;
            }
            if (val > target) {
                r--;
            }else {
                l++;
            }
        }
    }

    return res;
};

/*
test:
 1. 
 t = 1
 minVal = 1
 -2 1 2
 ^
    ^
      ^
 
 2.
 t = 5
 minVal = 0
 0 0 0 0
 ^
   ^
       ^

 3.
 t = 10
 minVal = -3
 -5 -2 1 2 4
  ^
     ^
           ^
*/