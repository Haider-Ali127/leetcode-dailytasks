/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let char of nums){
        if(set.has(char)){
          return true
        }
        set.add(char)
    }
    return false
};