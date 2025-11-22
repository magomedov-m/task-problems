/**
 * @param {number[]} nums
 * @return {number}
 */
 // every x
 // [] - false
 // [x], [x, x] - x
 // 
var majorityElement = function(nums) {
    let candidate = 0;
    let count = 0;

    for (let i of nums) {
        if (count == 0) {
            candidate = i;
            count++;
            continue;
        }else if (i == candidate) {
            count++;
        }else if (i != candidate) {
            count--;
        }
    }

    return candidate;
};