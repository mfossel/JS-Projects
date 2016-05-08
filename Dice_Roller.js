
var total = 0;
var random = 0;

var roller = function(numDice, numSides) {
    for (i = 0; i < numDice; i++) {
        random = Math.floor(Math.random() * numSides) + 1
        console.log("Roll:" + random);
        total = total +random;
}
    console.log("Your total is " + total)
}


numDiceUser = prompt("How many dice do you want to roll?")
var numSidesUser = prompt("How many sides do you want each dice to have?")
roller(numDiceUser, numSidesUser)
