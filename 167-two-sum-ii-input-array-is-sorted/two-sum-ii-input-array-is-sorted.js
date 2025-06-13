/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
Q:
 1. numbers.length >= 2
 2. numbers[i] -1000 > 1000
 3. sorted - true
 4. every elem not valid - true

A:
 1 4 4 5
 ^
     ^

Time: O(n);
Space: O(1)
*/
var twoSum = function(numbers, target) {

    let l = 0;
    let r = numbers.length - 1;

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