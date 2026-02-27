/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
     let sum = 0;
     let mnLen = Infinity;

     for(let right = 0; right < nums.length; right++){
        sum += nums[right];
        while(sum >= target){
            let window = right - left + 1;
            mnLen = Math.min(mnLen, window);
            sum -= nums[left];
            left++
            }  
        }
            if(mnLen == Infinity){
                return 0;
            }
        return mnLen;
};