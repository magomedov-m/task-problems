/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if (s.length < 3) return 0;

    let count = 0;

    let left = 0;
    let freq = {};

    for (let right = 0; right < s.length; right++) {
        freq[s[right]] = (freq[s[right]] || 0) + 1;

        if (right - left + 1 == 3) {
            if (Object.keys(freq).length === 3) count++;

            freq[s[left]]--;
            if (freq[s[left]] === 0) {
                delete freq[s[left]]
            }
            left++
        }
    }

    return count;
};