/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     if(n <= 2){
        return n
     }
     let one = 1;
     let two = 2;
     for(let i = 3; i <= n; i++){
        let current = one + two;
        one = two
        two = current
     }
     return two 
};