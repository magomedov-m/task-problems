/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
    
//     let mpS = new Map();
//     let mpT = new Map();
    
//     for (let i = 0; i < s.length; i++){
//         mpS.set(s[i], (mpS.get(s[i]) ? mpS.get(s[i]) + 1 : 0));
//         mpT.set(t[i], (mpT.get(t[i]) ? mpT.get(t[i]) + 1 : 0));
//     }
    
//     for (let [key, val] of mpS) {
//         if (mpT.get(key) !== val) {
//             return false;
//         }
//     }
    
//     return true;
// };
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let mpS = new Map();
    let mpT = new Map();
    
    for (let i = 0; i < s.length; i++) {
        mpS.set(s[i], (mpS.get(s[i]) ?? 0) + 1);
        mpT.set(t[i], (mpT.get(t[i]) ?? 0) + 1);
    }
    
    for (let [key, val] of mpS) {
        if (mpT.get(key) !== val) {
            return false;
        }
    }
    
    return true;
};
