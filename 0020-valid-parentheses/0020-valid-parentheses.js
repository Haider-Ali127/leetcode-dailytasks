/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i])
        } 
        else if(s[i] == ')' || s[i] == ']' || s[i] == '}'){
            if(stack.length == 0){
                return false
            }   
            if(
                (s[i] == ')' && stack.pop() !== '(') ||
                (s[i] == ']' && stack.pop() != '[') ||
                (s[i] == '}' && stack.pop() != '{'))
                {
                return false
            }
        }
    }
    return stack.length == 0 
};