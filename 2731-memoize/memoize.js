/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    let cache = new Map();

    return function(...args) {
        let value = args.join('|');

        if (cache.has(value)) {
            return cache.get(value);
        }else {
            let output = fn(...args);
            cache.set(value, output);
            return output;
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