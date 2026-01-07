 /*
 only number - true
 get,pop,top - stack > 0
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];

    return null;
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    let currentMin = this.minStack.length ? Math.min(this.minStack[this.minStack.length - 1], val) : val; 
    this.minStack.push(currentMin);

    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let lastEl = this.stack.pop();
    this.minStack.pop();
    return lastEl;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */