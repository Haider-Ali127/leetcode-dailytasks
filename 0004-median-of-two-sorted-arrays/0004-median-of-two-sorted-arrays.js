/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let n1 = nums1.length;
    let n2 = nums2.length;
    let total = n1 + n2;

    let mid = Math.floor(total / 2);

    let i = 0, j = 0;
    let prev = 0, curr = 0;

    for (let k = 0; k <= mid; k++) {

        prev = curr;

        if (i < n1 && (j >= n2 || nums1[i] <= nums2[j])) {
            curr = nums1[i];
            i++;
        } else {
            curr = nums2[j];
            j++;
        }
    }

    if (total % 2 === 0) {
        return (prev + curr) / 2;
    } else {
        return curr;
    }
}
 