/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let mp = new Map();

    for (let i of jewels) {
        mp.set(i, true);
    }

    for (let j of stones) {
        if (mp.has(j)) count++;
    }

    return count;
};