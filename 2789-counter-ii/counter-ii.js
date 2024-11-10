/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    
    return {
        curValue: init,
        increment: function increment() {
            this.curValue++
            return this.curValue
        },
        decrement: function decrement() {
            this.curValue--
            return this.curValue
        },
        reset: function reset() {
            this.curValue = init
            return this.curValue
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */