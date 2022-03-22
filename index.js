// Code your solution in this file!
let distance = 0
const block = 42
function distanceFromHqInBlocks(user_block){
    distance = Math.abs(user_block - block)
    return distance
}
distanceFromHqInBlocks(43)
console.log(distanceFromHqInBlocks(50))

function distanceFromHqInFeet(user_block){
    distance = Math.abs(user_block - block)
    let distanceInFeet = distance * 264
    return distanceInFeet
}
// console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(block, user_block){
    distance = Math.abs(user_block - block)
    let distanceInFeet = distance * 264
    return distanceInFeet
}

// console.log(distanceTravelledInFeet(43, 48))

function calculatesFarePrice(start, destination){
    distance = Math.abs(start - destination)
    let distanceInFeet = distance * 264
    let farePrice = 0
    
    if(distanceInFeet <= 400){
        farePrice = 0
    }
    else if( distanceInFeet > 400 && distanceInFeet <= 2000){
        let newDistanceInFeet = distanceInFeet - 400
        farePrice = newDistanceInFeet * 0.02
    }
    else if( distanceInFeet > 2000 && distanceInFeet <= 2500){
        farePrice = 25
    }
    else {
        return "cannot travel that far"
    }

    return farePrice
}
calculatesFarePrice(43, 44)
// console.log(calculatesFarePrice(43, 44))