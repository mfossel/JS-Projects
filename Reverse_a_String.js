var forward = prompt("Please enter a string to be reversed")
var backward = new Array();
    for (x = forward.length; x > -1; x--) {
    backward.push(forward[x]);
    }

backwards = backward.join("")

    if (backwards === forward) {
    console.log("It's a palindrom!");
    console.log(backwards);
}
    else {
    console.log(backwards);
};
