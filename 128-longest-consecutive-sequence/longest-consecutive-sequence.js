/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let res = 1;
    let s = new Set(nums);
    
    for (let el of s) {
        
        if (!s.has(el - 1)) {
            let r = el;
            
            while (s.has(r)) {
                res = Math.max(res, r - el + 1);
                r++;
            }
        }
    }
    
    return res;
};