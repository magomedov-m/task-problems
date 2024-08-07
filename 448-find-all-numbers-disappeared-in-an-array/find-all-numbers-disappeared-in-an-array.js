/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    let map = new Map();

    for (let i of nums) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        }else {
            map.set(i, 1);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            res.push(i);
        }
    }

    return res;
}