/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let mp = new Map();
    let callCount = 0;
    
    return function(...args) {
        let key = [...args].join('-');

        if (mp.has(key)) {
            return mp.get(key);
        }else {
            let resFn = fn(...args);
            callCount++;
            mp.set(key, resFn);

            return resFn;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */