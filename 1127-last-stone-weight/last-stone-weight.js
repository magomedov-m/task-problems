/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        if (stones[0] === stones[1]) {
            stones.shift();
            stones.shift();
        }else {
            stones.push(stones.shift() - stones.shift());
        }
    }

    return stones[0] || 0;
};