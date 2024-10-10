/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack = null;
    let answer = [];

    for (let i = 0; i < prices.length; i++) {
        stack = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] - prices[j] >= 0) {
                stack = prices[i] - prices[j]
                break;
            } 
        }
        answer.push(stack)
    }

    return answer;
};