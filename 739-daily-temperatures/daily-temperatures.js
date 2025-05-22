/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    // задача не решена самостоятельно, подсказка: использовать монотонные стек. решить эту задачу 29.05
    let res = new Array(t.length).fill(0);
    let stack = [];

    for (let i = t.length - 1; i >= 0; i--) {
        while (stack.length && t[i] >= t[stack[stack.length - 1]]) {
            stack.pop()
        }

        res[i] = stack.length ? stack[stack.length - 1] - i : 0;
        stack.push(i)
    }

    return res;
};