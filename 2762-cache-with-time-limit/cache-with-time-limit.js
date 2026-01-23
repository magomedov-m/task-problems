var TimeLimitedCache = function() {
    this.mp = new Map();

    return null;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let data = this.mp.get(key) || null;

    this.mp.set(key, [value, duration, Date.now()]);

    if (!data) return false;

    let durat = data[1];
    let start = data[2];

    let isValidKey = Date.now() < durat + start;

    if (isValidKey) {
        return true;
    }

    return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    let data = this.mp.get(key) || null;

    if (!data) return -1

    let duration = data[1] ?? 0;
    let start = data[2] ?? 0;

    let isValidKey = Date.now() <= (duration + start);

    if (isValidKey) {
        return data[0];
    }

    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;

    for (let [k, v] of this.mp) {
        let difTime = Date.now() < v[1] + v[2];

        if (difTime) {
            count++;
        }
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */