/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let myset = new Set();
    let res = 0;
    for (let i = 0; i < jewels.length; i++) {
        myset.add(jewels[i]);
    }
    
    for (let i = 0; i < stones.length; i++) {
        if (myset.has(stones[i])) res++;
    }
    
    return res;
};


// Muhammad
// var numJewelsInStones = function(jewels, stones) {
    
// };