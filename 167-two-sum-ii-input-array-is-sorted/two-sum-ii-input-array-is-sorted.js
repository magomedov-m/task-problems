/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    let res = [];

    while (l < r) {
        let val = numbers[l] + numbers[r];

        if (val == target) {
            return [l + 1, r + 1];
        }else if (val < target) {
            l++;
        }else {
            r--;
        }
    }
};