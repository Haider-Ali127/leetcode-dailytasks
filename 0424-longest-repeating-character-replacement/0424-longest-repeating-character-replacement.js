/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxLength = 0;
    let maxFrequency = 0;
    let Frequency = [];

    for(let right = 0; right < s.length; right++){
        let character = s[right];
        Frequency[character] = (Frequency[character] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, Frequency[character]);

        windowLength = right - left + 1;

        if(windowLength - maxFrequency > k){
         Frequency[s[left]]--;
            left++;
        }
         maxLength = Math.max(maxLength, right - left + 1);

    }
    return maxLength;
};