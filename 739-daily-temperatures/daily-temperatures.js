/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let n = t.length;
    let res = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && t[i] > t[stack[stack.length - 1]]) {
            let index = stack.pop();
            res[index] = i - index;
        }

        stack.push(i);
    }

    return res;
};