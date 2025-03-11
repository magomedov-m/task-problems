/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Краевые случаи: массив может придти пустым (по ограничениям задачи это не так), k может быть равен 0 (также неверно по условию задачи);
var minimumDifference = function(nums, k) {
    if (nums.length == 1) return 0;

    nums.sort((a, b) => a - b);

    let minValue = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        minValue = Math.min(minValue, nums[i + k - 1] - nums[i]);
    }

    return minValue;
};