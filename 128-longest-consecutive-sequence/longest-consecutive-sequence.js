/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longestConsecutive = 0;
    let set = new Set(nums);

    for (let i of set) {
        if (!set.has(i - 1)) {
            let curNum = i;
            let curConsecutive = 1;

            while (set.has(curNum + 1)) {
                curNum++;
                curConsecutive++;
            }

            longestConsecutive = Math.max(curConsecutive, longestConsecutive);
        }

        
    }

    return longestConsecutive;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
