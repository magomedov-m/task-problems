/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
/*
Q:
 1. jew, stones < 1 - false;
 2. jewels items unique - true
 3. jew !include stones - true
*/
    let mp = new Map();

    for (let i of stones) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    let count = 0;

    for (let i of jewels) {
        mp.has(i) ? count += mp.get(i) : count += 0;
    }

    return count;
};