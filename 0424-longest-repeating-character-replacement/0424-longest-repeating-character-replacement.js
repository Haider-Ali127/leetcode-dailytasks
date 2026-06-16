/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxLength = 0;
    let maxfrequency = 0;
    let frequency = [];

    for(let right = 0; right  < s.length; right++){
        let character = s[right];
        frequency[character] = (frequency[character] || 0) + 1
        maxfrequency = Math.max(maxfrequency, frequency[character])

         windowLength = right - left + 1
        if(windowLength - maxfrequency > k){
            frequency[s[left]]--;
            left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};