/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let mp = new Map();

    for (let i of s) {
        mp.set(i, (mp.get(i) || 0) + 1);
    }

    let sortedMap = [...mp.entries()].sort((a, b) => b[1] - a[1]);

    let stroke = '';

    for (let [key, value] of sortedMap) {
        stroke += key.repeat(value);
    }

    return stroke;
};