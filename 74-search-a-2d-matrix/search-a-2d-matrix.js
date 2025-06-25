/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l = 0;
    let r = matrix.length - 1;
    let subArr = [];

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);

        if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
            subArr = [...matrix[mid]];
            break;
        }else if (matrix[mid][0] > target) {
            r = mid - 1;
        }else {
            l = mid + 1;
        }
    }

    let left = 0;
    let right = subArr.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);

        if (subArr[middle] == target) {
            return true;
        }else if (subArr[middle] > target) {
            right = middle - 1;
        }else {
            left = middle + 1;
        }
    }

    return false;
};