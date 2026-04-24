/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
     let n = position.length 
     let cars = new Array(n)

     for(let i = 0; i < n; i++){
        cars[i] = [position[i], speed[i]]
     }
     cars.sort((a,b) => b[0] - a[0])

     let fleets = 0
     let lastTime = 0
     for(let i = 0; i < n ;i++){
        let time = (target - cars[i][0])/cars[i][1]
        if(time > lastTime){
            fleets++
            lastTime = time
        }
     }
     return fleets

}