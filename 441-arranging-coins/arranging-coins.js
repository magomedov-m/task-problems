/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let cur = 1;

    while (n - cur >= 0) {
        n = n - cur;

        cur++;
    }

    return cur - 1;
};