/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//  only lowercase & en - true
//  '' - false
//  duplicate - true

var canConstruct = function(ransomNote, magazine) {
    let mp = new Map();

    for (let i of magazine) {
        mp.set(i, mp.get(i) + 1 || 1);
    }

    for (let j of ransomNote) {
        if (mp.get(j) == 0 || !mp.has(j)) {
            return false;
        }else {
            mp.set(j, mp.get(j) - 1);
        }
    }

    return true;
};

// 1. note='a'; magazine='b'
// mp=[[ b: 0 ]]
//         j

// 2. note='aa'; magazine='ab';
// mp = [[a: 0], [b: 1]]

// 3. magazine='aab'
// mp=[[a: 0], [b: 1]]
// note='aa'
//        ^