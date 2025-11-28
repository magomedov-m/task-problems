/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let n = nums.length;
    let map = new Map();
    for (let i of nums) {
        map.set(i, (map.get(i) || 0) + 1);
    }

    function findMaxElem(nums) {
        let maxElem = -1;

        for (let [key, value] of map) {
            if (key > maxElem && value == 1) {
                maxElem = key;
            }
        }

        return maxElem;
    }

    if (k == 1) {
        return findMaxElem(nums);
    }else if (k == n) {
        return Math.max(...nums)
    }else {
        let first = map.get(nums[0]);
        let second = map.get(nums[n - 1]);

        if (first == 1 && second == 1) {
            return nums[0] > nums[n - 1] ? nums[0] : nums[n - 1];
        }else if (first == 1) {
            return nums[0]
        }else if (second == 1) {
            return nums[n - 1];
        }
    }

    return -1;
};