/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars = position.map((pos, i) => [pos, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = 0;
    let lastTime = 0;
    for (let [pos, spd] of cars) {
        let time = (target - pos) / spd;
        if (time > lastTime) {
            fleets++;
            lastTime = time;
        }
    }
    
    return fleets;
};