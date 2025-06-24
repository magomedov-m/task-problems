/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let maxVal = 0;
    let l = 0;
    let r = 0;
    
    while (r < seats.length) {
        if (seats[r] == 1 && seats[l] == 1) {
            let curVal = Math.floor((r - l) / 2);
            maxVal = Math.max(maxVal, curVal);
            l = r;
        }else if (r == seats.length - 1 || seats[r] == 1) {
            if (seats[r] == 1 && seats[l] == 0 || seats[r] == 0 && seats[l] == 1) {
                maxVal = Math.max(maxVal, r - l);
                l = r;
            }
        }

        r++;
    }

    return maxVal;
};