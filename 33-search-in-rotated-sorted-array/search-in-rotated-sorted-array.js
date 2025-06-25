/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function findMinElem(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let mid = Math.floor(l + (r - l) / 2);

            if (nums[mid] > nums[r]) {
                l = mid + 1;
            }else {
                r = mid;
            }
        }

        return l;
    }

    let minElem = findMinElem(nums);

    let l = 0;
    let r = nums.length - 1;

    if (target >= nums[minElem] && target <= nums[r]) {
        l = minElem;
    }else {
        r = minElem - 1;
    }

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);

        if (target == nums[mid]) {
            return mid;
        }else if (target < nums[mid]) {
            r = mid - 1;
        }else {
            l = mid + 1;
        }
    }

    return -1;
};