/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 // [] - false
 // pick in arr - true
 // num > 0
var guessNumber = function(n) {
    let l = 0;
    let r = n;

    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;

        let value = guess(mid);

        if (value == 0) {
            return mid;
        }else if (value == -1) {
            r = mid - 1;
        }else {
            l = mid + 1;
        }
    }
};

// 10, 6
// mid = 6
// value = 0
// l = 6
// r = 7