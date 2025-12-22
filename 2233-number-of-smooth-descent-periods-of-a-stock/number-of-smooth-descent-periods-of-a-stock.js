/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let count = 1;
    let len = 1;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] - prices[i] === 1) {
            len++;
        }else {
            len = 1;
        }

        count += len;
    }

    return count;
};