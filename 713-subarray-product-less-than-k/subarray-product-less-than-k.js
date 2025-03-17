/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Краевые случаи: массив пустой, k <= 0, все элементы массива или один из них равен 0, все элементы массива больше k, отрицательные числа в массиве
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;

    let multi = 1;
    let count = 0;
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        multi *= nums[r];

        while (multi >= k) {
            multi /= nums[l++];
        }
        
        count += 1 + r - l;
        r++;
    }

    return count;
};