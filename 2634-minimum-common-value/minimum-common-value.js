/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 // nums1, nums2 [] - false
 // only positive int - true
 // duplicates - true
 // 
var getCommon = function(nums1, nums2) {
    function getSelfNumber(n) {
        let l = 0;
        let r = nums2.length - 1;

        while (l <= r) {
            let mid = Math.floor((r - l) / 2) + l;

            if (nums2[mid] == n) {
                return true;
            }else if (nums2[mid] > n) {
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }

        return false;
    }

    for (let i of nums1) {
        let curValue = getSelfNumber(i);

        if (curValue) {
            return i;
        }
    }

    return -1;
};

// [1, 2, 3] [2, 4]
//     ^