/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
   let left = 0;
   let map = {};
   let maxLen = 0;

    for(let right = 0; right < fruits.length; right++){
        map[fruits[right]] = (map[fruits[right]] || 0) + 1;

        while(Object.keys(map).length > 2){
            map[fruits[left]]--;
            if(map[fruits[left]] === 0){
                delete map[fruits[left]];    
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1);

    }
    return maxLen;
};