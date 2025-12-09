/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arrS = s.split('');
    
    let obj = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    }
    
    let l = 0;
    let r = s.length - 1;
    
    function isVowel(letter) {
        if (obj[letter.toLowerCase()]) return true;
        
        return false;
    }
    
    while (l < r) {
        while (l < r && !isVowel(arrS[l])) l++;
        while (r > l && !isVowel(arrS[r])) r--;
        
        [arrS[l], arrS[r]] = [arrS[r], arrS[l]];
        l++;
        r--;
    }
    
    return arrS.join('');
};