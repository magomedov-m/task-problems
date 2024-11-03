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

    sortedMap.forEach(([key, value]) => {
        for (let i = 0; i < value; i++) {
            stroke += key;
        }
    })

    return stroke;
};