/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) { 
       let left = 0
   let right = numbers.length - 1
   for(let i = 0; i < right ; i++)
   while(left < right){
    if(numbers[left] + numbers[right] > target){
        right = right - 1
    }
    else if(numbers[left] + numbers[right] < target){
        left = left + 1
    }
    else {
        return new Array(left + 1, right + 1)
    }
   }
   return null

};