/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0
    let roman = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ])

    let i = 0

   while(i < s.length - 1){

    let current = roman.get(s[i])
    let next = roman.get(s[i + 1])
    if(current < next){
        total -= current
    } else {
        total += current
    }
    i++
    }
    return total + roman.get(s[s.length - 1])
};