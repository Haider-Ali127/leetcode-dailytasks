/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1map = {};
    let windowMap = {};
    let left = 0;
    let matchCount = 0;
    let windowSize = s1.length

   for(let char of s1){
    s1map[char] = (s1map[char] || 0) + 1;
   }  
   for(let right = 0; right < s2.length; right ++){
    let char = s2[right];
    if(s1map[char] !== undefined){
        windowMap[char] = (windowMap[char] || 0) + 1;
        if(s1map[char] == windowMap[char]) matchCount++;
    }
     if(right - left + 1 > windowSize){
            let leftchar = s2[left]
            if(s1map[leftchar] !== undefined){
                if(windowMap[leftchar] === s1map[leftchar]) matchCount--;
                windowMap[leftchar]--;
            }
            left++;
   }
   if(matchCount === Object.keys(s1map).length) return true;
   }
   return false;
}
