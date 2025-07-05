
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.minVal = this.stack.length == 0 ? val : this.stack[this.stack.length - 1][1];
    if (val < this.minVal || this.minVal == null) {
        this.minVal = val;
    }

    this.stack.push([val, this.minVal]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1][0];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */