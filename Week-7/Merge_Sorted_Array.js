/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // creating pointers for nums1, nums2 and the merged array
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    // loop backwards through the arrays, comparing and adding elements to the merged array
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--; 
    }

    // add remaining elements from nums2 to the beginning of nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};