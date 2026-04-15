/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }
        else if(token == ("+") || token == ("-") || token == ("*") || token == ("/")){
            let b = stack.pop()
            let a = stack.pop()
            let result 
            if(token == ("+")) result = a + b
            if(token == ("-")) result = a - b
            if(token == ("*")) result = a * b
            if(token == ("/")) result = Math.trunc(a / b)
            stack.push(result)
        }
    }
    return stack[0]
};