/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length != goal.length) return false;

    function culcChar (s1, s2) {
        let mp1 = new Map();
        let mp2 = new Map();

        for (let i = 0; i < s.length; i++) {
            mp1.set(s1[i], (mp1.get(s1[i]) || 0) + 1);
            mp2.set(s2[i], (mp2.get(s2[i]) || 0) + 1);
        }

        for (let [key, value] of mp1) {
            if (value != mp2.get(key)) return false;
        }

        return true;
    }

    if (!culcChar(s, goal)) return false;

    let set = new Set(goal);
    let duplicates = set.size == goal.length ? false : true;
    let count = 0;

    if (s == goal && duplicates) {
        return true;
    }else if (s !== goal) {

        for (let i = 0; i < s.length; i++) {
            if (s[i] != goal[i]) count++;
        }
    }

    if (count == 2) {
        return true;
    }else {
        return false;
    }
};