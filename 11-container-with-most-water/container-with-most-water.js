/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let res = 0; // 10
    let l = 0;
    let r = n - 1;
    
    while (l < r) {
        let val = Math.min(height[l], height[r]) * (r - l);
        
        res = Math.max(res, val);
        
        if (height[l] <= height[r]) {
            l++;
        }else {
            r--;
        }
    }
    
    return res;
};