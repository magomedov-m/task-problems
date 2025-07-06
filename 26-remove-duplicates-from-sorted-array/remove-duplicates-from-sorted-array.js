/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Q:
 1. 1 <= len <= 3 * 10^3
 2. valid number - false
 3. sorted - true

A:
two pointer

 1 2 3 4 3 1
       ^
           ^

Time: O(n + k) - my mistake
Time*: O(n)
Space: O(1)
*/

var removeDuplicates = function(nums) {
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        if (nums[r] != nums[l]) {
            l++;
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }

        r++;
    }

    return l + 1;
};

/*
debug:
 1
 ^
 ^

 1 1
 ^
   ^

 1 2 1
   ^
     ^
*/