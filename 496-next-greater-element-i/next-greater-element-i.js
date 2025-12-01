/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let mp = new Map();

    for (let i of nums2) {
        while (stack.length > 0 && i > stack[stack.length - 1]) {
            mp.set(stack.pop(), i);
        }

        stack.push(i);
    }

    for (let i of stack) {
        mp.set(i, -1);
    }

    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = mp.get(nums1[i]);
    }

    return nums1;
};
// 0: 1; 1: 3;
// 4 1 2 - 1 3 4 2
//               ^
// stack = 4 2
// mp = 1: 3, 3: 4, 