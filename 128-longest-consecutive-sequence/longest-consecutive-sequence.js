/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0;

    const set = new Set(nums);
    let max = 0;

    for (let i of set) {
        if (set.has(i - 1)) continue;

        let curNum = i;
        let curMax = 1;

        while (set.has(curNum + 1)) {
            curNum++;
            curMax++;
        }

        max = Math.max(max, curMax);

    }

    return max;
};