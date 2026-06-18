/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let freq = new Array(26).fill(0);

    for (let ch of s1) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let left = 0;
    let count = s1.length;

    for (let right = 0; right < s2.length; right++) {
        let r = s2.charCodeAt(right) - 97;

        if (freq[r] > 0) count--;
        freq[r]--;

        if (count === 0) return true;

        if (right - left + 1 === s1.length) {
            let l = s2.charCodeAt(left) - 97;

            if (freq[l] >= 0) count++;
            freq[l]++;

            left++;
        }
    }

    return false;
};