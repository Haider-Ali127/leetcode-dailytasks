/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    while(i <= haystack.length - needle.length){
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
            }
            i++
    }
    return -1
};