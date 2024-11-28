/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(h) {
    let curValue = 0;
    let maxValue = 0;

    let l = 0;
    let r = h.length - 1;

    while (l < r) {
        if (h[l] < h[r]) {
            let height = Math.min(h[l], h[r]);
            let res = height * (r - l);
            maxValue = Math.max(res, maxValue);
            l++;
        }else {
            let height = Math.min(h[l], h[r]);
            let res = height * (r - l);
            maxValue = Math.max(res, maxValue);
            r--;
        }
    }

    return maxValue;
};