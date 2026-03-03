/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0;
    let result = [];
    let map = {};
    let window = p.length;

    for (let char of p) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        if (map[ch] !== undefined) {
            map[ch]--;
        }
        if (right - left + 1 > window) {
            let leftChar = s[left];

            if (map[leftChar] !== undefined) {
                map[leftChar]++;
            }
            left++;
        }
        if (right - left + 1 === window) {
            let isAnagram = true;
            for (let key in map) {
                if (map[key] !== 0) {
                    isAnagram = false;
                    break;
                }
            }
            if (isAnagram) {
                result.push(left);
            }
        }
    }
    return result;
};