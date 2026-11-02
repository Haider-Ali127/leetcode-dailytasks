/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0
    while(x !== 0){
        let digit = x % 10;
        reversed = reversed * 10 + digit
        x = Math.trunc(x/10)
    }
     if (reversed < -2147483648 || reversed > 2147483647) {
        return 0;
    }

    return reversed;
};