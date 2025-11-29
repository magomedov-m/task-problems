/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    if (prices.length == 1) return prices;

    for (let i = 0; i < prices.length - 1; i++) {
        let j = i + 1;
        for (j; j < prices.length; j++) {
            
            if (prices[j] <= prices[i]) {
                let value = prices[i] - prices[j];
                prices[i] = value;
                break;
            }
        }
    }


    return prices;
};

// 4 2 4 2
// 8 4 6 2 3
//       i
//         j

// 1 2 3 4 5
// 1 2 3 4 5
//       i
//         j

// 9 0 1 6
// 10 1 1 6
//      i
//        j