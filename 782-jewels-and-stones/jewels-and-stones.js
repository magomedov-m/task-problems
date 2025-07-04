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

    for (let i of jewels) {
        mp.set(i, true);
    }

    let count = 0;

    for (let i of stones) {
        if (mp.has(i)) {
            count++;
        }
    }

    return count;
};