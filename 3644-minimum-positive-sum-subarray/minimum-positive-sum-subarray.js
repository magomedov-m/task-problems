/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let n = nums.length;
    let minSum = Infinity;
    
    // Перебираем все возможные начальные позиции подмассива
    for (let i = 0; i < n; i++) {
        let sum = 0;
        // Формируем подмассивы, заканчивающиеся на j, при условии, что длина не превышает r
        for (let j = i; j < n && (j - i + 1) <= r; j++) {
            sum += nums[j];
            // Если текущая длина подмассива не меньше l и сумма > 0, обновляем minSum
            if (j - i + 1 >= l && sum > 0) {
                minSum = Math.min(minSum, sum);
            }
        }
    }
    
    return minSum === Infinity ? -1 : minSum;
};

