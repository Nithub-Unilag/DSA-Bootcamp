/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // declare two pointers to the first and last elements of the array
    let left = 0, right = height.length - 1;
    // var maxArea to store the maximum area
    let maxArea = 0;
    // using while loop until the left pointer is no longer < the left of the right pointer
    while (left < right) {
        // cal the area of the container formed by the two lines pointed to by the pointers
        let area = Math.min(height[left], height[right]) * (right - left);
        // update the var maxArea with the maximum value
        maxArea = Math.max(maxArea, area);
        // move the pointer that points to the shorter line towards the center
        if (height[left] < height[right]) {
            left++;
        } 
        else {
            right--;
        }
    }
    // return the maximum area
    return maxArea;
};
