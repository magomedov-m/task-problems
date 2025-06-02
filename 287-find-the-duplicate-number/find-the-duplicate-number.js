/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
/*
Q:
 1. nums.len < 2 - false
 2. valid numbers - true
 3. only number - true
 4. sorted - false
 5. every elem equal - true
*/

    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]]
    }while (slow != fast);

    slow = nums[0];
    while (fast != slow) {
        slow = nums[slow];
        fast = nums[fast]
    }

    return slow;
};