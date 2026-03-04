/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let avg = 0;
    let result = 0;

    for(let i = 0; i < k; i++){
         avg += arr[i] 
    }
    if(avg/k >= threshold) result++;
    for(let i = k; i < arr.length;i++){
        avg += arr[i]
        avg -= arr[i - k]
    if(avg/k >= threshold){
        result++
    }  
}
    return result
}
