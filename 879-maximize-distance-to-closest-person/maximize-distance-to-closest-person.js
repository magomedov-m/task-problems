/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let arr = new Array(seats.length).fill(Infinity);
    let n = seats.length;
    let lastPn = -1;
    let max = 0;

    for (let i = 0; i < n; i++) {
        if (seats[i] === 1) {
            lastPn = i;
        }

        if (lastPn !== -1) {
            arr[i] = i - lastPn;
        }
    }

    lastPn = -1;

    for (let j = n - 1; j >= 0; j--) {
        if (seats[j] === 1) {
            lastPn = j;
        }

        if (lastPn !== -1) {
            arr[j] = Math.min(arr[j], lastPn - j)
        }
    }

    for (let i of arr) {
        max = Math.max(max, i);
    }

    return max;
};
// lastPn = 1

// 0 1 -> seats
//   j
// 0 0 -> arr
// 0 1 -> indexes

