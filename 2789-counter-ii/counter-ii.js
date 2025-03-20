/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curValue = init;

    return {
        increment: function increment() {
            curValue++;
            return curValue;
        },
        decrement: function decrement() {
            curValue--;
            return curValue;
        },
        reset: function reset() {
            curValue = init;
            return curValue;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */