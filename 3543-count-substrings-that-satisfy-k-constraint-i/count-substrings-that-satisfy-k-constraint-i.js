/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//  Краевые случаи: может ли K < 1, s.length < 1, k > s.length, в s есть элементы помимо 1 и 0
var countKConstraintSubstrings = function(s, k) {
    let countZeroes = 0;
    let countOnes = 0;

    let left = 0;
    let res = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            countZeroes++;
        }else {
            countOnes++;
        }

        while (countZeroes > k && countOnes > k) {
            if (s[left] === "0") {
                countZeroes--;
            }else {
                countOnes--;
            }
            left++;
        }

        res += right - left + 1;
    }

    return res;
};