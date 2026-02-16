/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0;
    let maxCount = 0;
    let left = 0;
    let vowels = new Set(['a','e','i','o','u']);
     for(let right = 0; right < s.length; right++){
        if(vowels.has(s[right])){
            count++;
        }
         if(right - left + 1 > k){
            if(vowels.has(s[left])){
                count--;
            }
            left++;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};
