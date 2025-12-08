/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
         if (s.length < p.length) return [];
    
  let res = [];
  let hmS = new Map();
  let hmP = new Map();
  
  for (let i of p) {
      hmP.set(i, (hmP.get(i) || 0) + 1);
  }
  
  function isAnagram(hm1, hm2) {
      if (hm1.size !== hm2.size) return false;
      
      for (let [key, val] of hm1) {
          if (!hm2.has(key)) {
              return false;
          }else if (val != hm2.get(key)) return false;
      }
      
      return true;
  }
  
  let l = 0;
  
  for (let r = 0; r < s.length; r++) {
      hmS.set(s[r], (hmS.get(s[r]) || 0) + 1);
      
      while (r - l + 1 > p.length) {
          if (hmS.get(s[l]) === 1) {
              hmS.delete(s[l]);
          }else if (hmS.get(s[l]) > 1) {
              hmS.set(s[l], hmS.get(s[l]) - 1);
          }
          
          l++;
      }
      
      if (isAnagram(hmS, hmP)) {
          res.push(l);
      }
  }
  
  return res;
};