/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(h) {
    if (h.length == 1) return 0;

    let l = 0;
    let r = h.length - 1;

    let leftMax = h[l];
    let rightMax = h[r];

    let res = 0;

    while (l < r) {
        if (leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, h[l]);
            res += leftMax - h[l];
        }else {
            r--;
            rightMax = Math.max(rightMax, h[r]);
            res += rightMax - h[r];
        }
    }

    return res;
};