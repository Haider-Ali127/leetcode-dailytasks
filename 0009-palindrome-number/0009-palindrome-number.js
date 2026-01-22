/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let result = str.split("").reverse().join("");

    return str === result;
};
