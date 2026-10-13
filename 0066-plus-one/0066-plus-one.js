/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let indx = digits.length - 1
    
    while(indx >= 0 && digits[indx] === 9){
        digits[indx] = 0
        indx--
    }
     
    if(digits[indx] < 9){
        digits[indx]++
       return digits
    }    
    digits.unshift(1)
    return digits
};