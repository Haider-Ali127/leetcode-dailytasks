/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(let char of strs){
        let key = char.split("").sort().join("")
        if(!map[key]){
            map[key] = []
        }
        map[key].push(char)
    }
    return Object.values(map)
};