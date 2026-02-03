/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            let temp = nums[k];
            nums[k] = nums[right];
            nums[right] = temp;
            k++;
        }
    }
};
