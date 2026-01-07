/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

 /*
 [] - false
 30 <= 30 <= 100
 every duplicates

[73, 74, 75, 71, 69, 72, 76, 73]
                             ^
[76, 73]
 1 1 1 2 1 4 0 0

 T(n)
 S(n)
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;

    let res = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        let curTmp = temperatures[i];

        while (stack.length > 0 && curTmp > temperatures[stack[stack.length - 1]]) {
            let prevIdx = stack.pop();
            res[prevIdx] = i - prevIdx;
        }

        stack.push(i);
    }

    return res;
};

/*
[1 2 1 0]
[]
30 55 40 90
          i
*/