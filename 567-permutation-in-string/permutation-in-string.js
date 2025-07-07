/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    
    function palindrome(s1Copy, s2Copy) {

        for (let i = 0; i < s1Copy.length; i++) {
            if (s1Copy[i] !== s2Copy[i]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    if (palindrome(s1Count, s2Count)) {
        return true;
    }

    for (let i = s1.length; i < s2.length; i++) {
        s2Count[s2.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i - s1.length) - 97]--;

        if (palindrome(s1Count, s2Count)) {
            return true;
        }
    }

    return false;
};