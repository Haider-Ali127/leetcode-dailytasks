/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
   if(s.length == 0 || t.length == 0 || s.length < t.length){
    return ""
   }
   let mapT = {}
   for(let i = 0; i < t.length; i++){
    mapT[t[i]] = (mapT[t[i]] || 0) + 1
   }
     let required = Object.keys(mapT).length
     let formed = 0
     let rig = 0, lef  = 0
     let minLen = Infinity
     let windowCounts = {}
     let start = 0

    while(rig < s.length){
        let c = s[rig]
        windowCounts[c] = (windowCounts[c] || 0) + 1
        if(mapT[c] && windowCounts[c] === mapT[c]){
            formed++
        }
        while (lef <= rig && formed === required) {
            if(rig - lef + 1 < minLen){
                minLen = rig - lef + 1
                start = lef
            }
            let lefChar = s[lef]
            windowCounts[lefChar]--
           if (mapT[lefChar] && windowCounts[lefChar] < mapT[lefChar]) {
                formed--;
            }
            lef++
        }
        rig++
    }
 return minLen === Infinity ? "" : s.substring(start, start + minLen);
}