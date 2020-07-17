//1. Convert from feet to mile.
function feetToMile(feet){
    let mile = feet * 0.000189394;
    if(feet < 0){
        return "Negative length is not plausible for conversion!";
    }
    return mile;
}

let result = feetToMile(7258);
console.log("Output(in mile):", result); 



//2. Calculate the amount of woods needed.
function woodCalculator(input){
    var chair = input[0];
    var table = input[1];
    var bed = input[2];
    var sum = 1*chair + 3*table + 5*bed;
    if(chair<0 || table<0 || bed<0){
        return "Negative values can't be granted!";
    }
    return sum;
}
input = [16, 4, 4];
var woodAmount = woodCalculator(input);
console.log("Output(in cubic-feet):", woodAmount); 



//3. Calculate the total number of bricks for a given height of a building.
function brickCalculator(floorCount){
    var bricks = 1000;
    var bricksNeeded = floorCount * bricks;  
    if(floorCount < 0){
        return "You can't get result for negative input. It's absurd!"; 
    }
    else if(floorCount <= 10){
        var result1 = 15*bricksNeeded;
        return result1;
    }
    else if(floorCount <= 20){
        var result2 = 150000 + (floorCount - 10) * 12 * bricks;
        return result2;
    }
    else{
        var result3 = 270000 + (floorCount - 20) * 10 * bricks;
        return result3;
    }
}
var output = brickCalculator(25);
console.log("Total number of bricks:", output); 




//4. Finding the smallest name in an array.
function tinyFriend(friendsName){
        return friendsName.sort((currentName, smallestName) => currentName.length - smallestName.length)[0];
      }
friendsName = ["Ronaldo", "Messi", "Lewandowski", "Ozil", "Neymar", "Griezmann"];
let nameOutput = tinyFriend(friendsName);
console.log("Friend with the smallest name:", nameOutput); 
