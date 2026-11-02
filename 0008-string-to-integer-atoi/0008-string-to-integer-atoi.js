/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    s = s.trim();

    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + Number(s[i]);
        i++;
    }

    result *= sign;

    if (result < -2147483648) return -2147483648;
    if (result > 2147483647) return 2147483647;

    return result;
};