/**
 * @param {number[]} nums
 * @return {void} 
 */
var sortColors = function (nums) {
    // initialize var - low pointer to the begining of the array
    let low = 0;
    // initialize var - high pointer to end of array
    let high = nums.length - 1;
    // initialize var - i pointer to start of array
    let i = 0;

    // traverse array until i and high pointers meet
    while (i <= high) {
        // if the current element is 0
        if (nums[i] === 0) {
            // move 0s to the left
            [nums[i], nums[low]] = [nums[low], nums[i]]; // swap current element with element at low pointer

            // increment of both i & low pointers
            i++;
            low++;
        }
        // if the current element is 2
        else if (nums[i] === 2) {
            // move 2s to the right
            [nums[i], nums[high]] = [nums[high], nums[i]]; // swap current element with element at high pointer
            high--; // decrement high pointer
        }
        // if the current element is 1
        else {
            // leave 1s in the middle & just increment of i pointer
            i++;
        }
    }
};