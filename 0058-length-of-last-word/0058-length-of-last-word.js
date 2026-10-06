/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    while(s[index] === " "){
        index--
    }
    let ans = 0
    while(index >= 0 && s[index] !== " "){
       index--
       ans++
    }
    return ans
};