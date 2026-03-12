/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}

    for(let char of nums){
        map[char] = (map[char] || 0) + 1
    }

     let arr = Object.entries(map);

    arr.sort((a, b) => b[1] - a[1]);

    let result = [];
    for(let i = 0; i < k; i++){
        result.push(Number(arr[i][0]))
    }
    return result;
};