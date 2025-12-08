/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hmS1 = new Map();
    let hmS2 = new Map();
    
    for (let i of s1) {
        hmS1.set(i, (hmS1.get(i) || 0) + 1);
    }
    
    function isAnagram(mp1, mp2) {
        if (mp1.size !== mp2.size) return false;
        
        for (let [k, v] of mp1) {
            if (v !== mp2.get(k)) return false;
        }
        
        return true;
    }
    
    let l = 0;
    
    for (r = 0; r < s2.length; r++) {
        hmS2.set(s2[r], (hmS2.get(s2[r]) || 0) + 1);
        
        while (r - l + 1 > s1.length) {
            if (hmS2.get(s2[l]) === 1) hmS2.delete(s2[l]);
            else hmS2.set(s2[l], hmS2.get(s2[l]) - 1);
            
            l++;
        }
        
        if (isAnagram(hmS1, hmS2)) {
            return true;
        }
    }
    
    return false;
};