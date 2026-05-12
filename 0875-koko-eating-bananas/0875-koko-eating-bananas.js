/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxPile = 0
    for(let pile of piles){
        maxPile = Math.max(maxPile, pile)
    }

    let calcHrs = function(speed){
        let hrs = 0
        for(let pile of piles){
            hrs += Math.ceil(pile/speed) 
        }
        return hrs
    }
    let bs = function(l,r){
        while(l < r){
           let avgSpeed = Math.floor((l+r)/2)
           let hrs = calcHrs(avgSpeed)
           if(hrs<=h) r = avgSpeed
           else l = avgSpeed + 1
        }
        return l
    }
   return bs(1,maxPile)
};