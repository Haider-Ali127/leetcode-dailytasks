/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
  if(s.length != t.length) return false;
  const alpha = new Array(26).fill(0)
  for(let i=0; i<s.length; i++){
    alpha[s[i].charCodeAt() - 97]++;
    alpha[t[i].charCodeAt() - 97]--;
  }
  return alpha.every(x => x===0)
 };