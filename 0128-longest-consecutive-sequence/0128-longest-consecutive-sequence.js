/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
         set.add(nums[i])
    }
    let longest = 1
    for(let num of set){
        if(set.has(num - 1)){
            continue
        }
        else{
            let current = num
            let currentSub = 1
            while(set.has(current + 1)){
                current++
                currentSub++
            }
            longest = Math.max(longest,currentSub)
        }
    }
    return longest
};