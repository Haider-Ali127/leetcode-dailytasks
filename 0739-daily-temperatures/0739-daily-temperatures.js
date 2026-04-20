/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let n = t.length;
    let res = new Array(n).fill(0);
    let s = [];

    for (let i = 0; i < n; i++) {
        while (s.length && t[i] > t[s[s.length - 1]]) {
            let idx = s.pop();
            res[idx] = i - idx;
        }
        s.push(i);
    }

    return res;
};