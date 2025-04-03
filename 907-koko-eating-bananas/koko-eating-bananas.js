/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let optimal = 0;
    

    function predicat(value) {
        let sum = 0;

        for (let i of piles) {
            if (i > value) {
                sum += Math.ceil(i / value);
            }else {
                sum += 1;
            }
        }

        return sum <= h;
    }

    while (l < r) {
        let mid = Math.floor((r + l) / 2);

        if (predicat(mid)) {
            r = mid;
        }else {
            l = mid + 1;
        }
    }

    return l;
};