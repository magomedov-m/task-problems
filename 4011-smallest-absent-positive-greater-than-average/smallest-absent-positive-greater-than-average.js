/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let len = nums.length;

    let mp = new Map();
    let sum = 0

    for (let i of nums) {
        mp.set(i, true);
        sum += i;
    }

    let midValue = sum / len;
    let startIdx = Math.ceil(midValue);

    // while (mp.has(startIdx) || startIdx == midValue || startIdx <= 0) {
    //     startIdx++;
    // }
    for (startIdx; startIdx < Infinity; startIdx++) {
        if (mp.has(startIdx) || startIdx == midValue || startIdx <= 0) {
            continue;
        }else {
            return startIdx;
        }
    }
    
};
// mp = 3:true; 5:true;
// sum = 8
// midValue = 4
// startIdx = 5
// 3 5
//   ^