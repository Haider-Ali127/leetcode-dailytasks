/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let n = t.length;
    let res = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && t[i] > t[stack[stack.length - 1]]) {
            let idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i);
    }

    return res;
};