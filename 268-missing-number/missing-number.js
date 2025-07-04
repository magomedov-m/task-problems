/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Q:
 1. sorted - false
 2. valid number - true
 3. nums.length > 0 - true
 4. unique number - true

A:
 sum1 = 10
 0 1 2 3 4
         ^
 sum2 = 7
 0 1 2 4
       ^

Time: O(n);
Space: O(1);
*/
var missingNumber = function(nums) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < nums.length + 1; i++) {
        sum1 += i;
    }

    for (let i of nums) {
        sum2 += i;
    }

    return sum1 - sum2;
};

/*
test:

1. 
 sum1 = 6
 i = 3
 0 1 2 3
 sum2 = 5
 0 2 3
     ^
*/