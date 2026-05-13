/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
 
    let right = nums.length;

    for(let i = 0; i < right; i++){
        if(nums[i] == target){
            return i;
        }
    }

    return -1;
};
