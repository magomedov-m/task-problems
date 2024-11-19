/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let answer = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        answer[i] = fn(arr[i], i);
    }

    return answer;
};