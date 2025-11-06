/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  s or t = '' - false
//  s,t contains only ascii - true

var isIsomorphic = function(s, t) {
    let mp = new Map();
    let mp2 = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!mp.has(s[i]) && !mp2.has(t[i])) {
            mp.set(s[i], t[i]);
            mp2.set(t[i], true);
        }else {
            if (mp.get(s[i]) !== t[i]) {
                return false;
            }
        }
    }

    return true;
};

// mp = 'f: b, o: a'
// 'foo'
//    ^
// 'bar'
//    ^