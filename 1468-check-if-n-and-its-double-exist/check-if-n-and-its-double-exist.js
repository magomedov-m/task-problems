/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    if (arr.length < 2) {
        return false;
    }

    let mp = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (mp.get(arr[i] * 2) || mp.get(arr[i] / 2)) {
            return true
        }
        mp.set(arr[i], true);
    }

    return false;
};