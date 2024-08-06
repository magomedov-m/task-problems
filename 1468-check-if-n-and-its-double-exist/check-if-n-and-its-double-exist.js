/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    if (arr.length < 2) {
        return false;
    }

    let mp = new Map();

    for (let i of arr) {
        if (mp.get(i * 2) || mp.get(i / 2)) {
            return true
        }
        mp.set(i, 2);
    }

    return false;
};