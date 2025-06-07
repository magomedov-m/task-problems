/**
 * @param {number[]} height
 * @return {number}
 */

/*
Q:
 1. h.length < 3 - false
 2. every elem = 0 - true
 3. valid number - true

A:
 maxValue = 
 1 8 6 2 5 4 8 3 7
   ^
     ^

Time: O(n)
Space: O(1)
*/

var maxArea = function(h) {
    let maxVal = 0;

    let l = 0;
    let r = h.length - 1;

    while (l < r) {
        let minElem = Math.min(h[r], h[l]);
        let cur = (r - l) * minElem
        maxVal = Math.max(cur, maxVal)

        if (h[l] <= h[r]) {
            l++;
        }else {
            r--;
        }
    }

    return maxVal;
};

/*
test:
 0 0 0 0
       ^
       ^

 1 2 3 4
     ^
       ^

 0 0
   ^
   ^

 9 9 9 9
       ^
       ^
*/