/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Q:
 1. nums[] - false
 2. every 1, every 0 - false
 
A:
sliding window
 1.
 1 0 0 1 1
       ^
         ^
*/
var findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0;
    let count = 0;

    for (let l = 0; l <= nums.length; l++) {

        if (nums[l] == 1) {
            count++;
        }else {
            maxLen = Math.max(maxLen, count);
            count = 0;
        }
    }

    return maxLen;
};
/*
test:
 1.
 1 0 1 1 1
     ^
         ^

 2.
 1 0
   ^
   ^

 3.
 0 0 0 1
       ^
       ^
*/