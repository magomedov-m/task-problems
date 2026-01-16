/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 // letters[i] = lower en
 // target lower en
 // 2 - 10^4
 // sorted - true
 // number - false
 // bin search

 // O(log n)
 // S(1)

var nextGreatestLetter = function(letters, target) {
    let l = 0;
    let r = letters.length - 1;
   
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
       
        if (letters[mid] > target) {
            r = mid;
        }else if (letters[mid] <= target) {
            l = mid + 1;
        }
    }
   
    if (letters[l] > target) {
       return letters[l];
    }else {
        return letters[0];
    }
};

// target = a
// 'c' 'f' 'j'
//      m
//  l
//  r