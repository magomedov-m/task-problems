/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    let res = 0;
    let prevMax = 0;
    let nextMax = 0;

    let leftArr = new Array(len).fill(0);
    let rightArr = new Array(len).fill(0);

    for (let left = 0; left < len; left++) {
        let cur = height[left];

        leftArr[left] = prevMax > cur ? prevMax : 0;

        prevMax = Math.max(prevMax, cur);
    }

    for (let right = len - 1; right >= 0; right--) {
        let cur = height[right];

        rightArr[right] = nextMax > cur ? nextMax : 0;

        nextMax = Math.max(nextMax, cur);
    }

    for (let el = 0; el < len; el++) {
        let min = Math.min(leftArr[el], rightArr[el]);
        let cur = height[el];

        if (min > cur) {
            res += min - cur;
        }
    }

    return res;
};

/*
res = 9
min = 4
h 4 2 0 3 2 5
          m
l 0 4 4 4 4 0
r 5 5 5 5 5 0
*/