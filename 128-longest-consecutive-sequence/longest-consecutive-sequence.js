/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxCount = 0;
    let count = 1;

    for (let i of set) {

        if (!set.has(i - 1)) {
            while (set.has(i + count)) {
                count++;
            }
        }
        if (count > maxCount) maxCount = count;
        count = 1;
    }

    return maxCount;
};