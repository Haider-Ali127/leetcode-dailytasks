/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let longestpalindrome = ""
     for(let i = 0; i < s.length; i++){
        let left = i;
        let right = i
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;   
        }
        let start = left + 1;
        let end = right - 1
        let current = s.substring(start,end + 1)
        if(current.length > longestpalindrome.length){
            longestpalindrome = current
        }
         left = i;
         right = i + 1;
         while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
          start = left + 1;
          end = right - 1
          current = s.substring(start,end + 1)
          if(current.length > longestpalindrome.length){
            longestpalindrome = current
          }
     }
     return longestpalindrome
};