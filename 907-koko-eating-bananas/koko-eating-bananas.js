/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

/*
Q:
 1. 
 2. 
 3.

A:
 k = 4;
 h = 3
 1 2 4
     ^
 0 0 0
 
Time: O(n * log n)
Space: O(1)
*/
var minEatingSpeed = function(piles, h) {
    let k = 1;
    let max = Math.max(...piles);

    function eatBananas(speed) {
        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / speed);
        }

        return hours > h;
    }

    while (k < max) {
        let mid = Math.floor(k + (max - k) / 2);

        if (eatBananas(mid)) {
            k = mid + 1;
        }else {
            max = mid;
        }
    }

    return k;
};