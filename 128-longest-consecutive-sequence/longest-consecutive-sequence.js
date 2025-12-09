/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let nSet = new Set(nums);
    let maxLen = 0;
    
    for (const num of nSet) {

        if (!nSet.has(num - 1)) {
            
            let current = num;
            while (nSet.has(current)) {
                current++;
            }
            maxLen = Math.max(maxLen, current - num);
        }
    }
    
    return maxLen;
};