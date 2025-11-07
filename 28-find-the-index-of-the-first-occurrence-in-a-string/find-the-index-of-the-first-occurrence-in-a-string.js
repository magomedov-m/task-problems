/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 // h < n - true
 // h, n = '' - false
 // only lowercase, en - true
var strStr = function(haystack, needle) {
    let lenH = haystack.length;
    let lenN = needle.length;

    if (lenH < lenN) return -1;

    for (let i = 0; i < lenH - lenN + 1; i++) {
        let subStr = haystack.slice(i, lenN + i);

        if (subStr == needle) return i;
    }

    return -1;
};

// 1. sadbutsad - sad
//    | |
// subStr = sad

// 2. leetcode - leeto
//       |   |
// subStr = etcod

// 3. a - a
//    |
// subStr = a