for (x = 1; x < 101;x++) {
    if (x % 3 === 0 && x % 5 ===0) {
        console.log("FizzBuzz") 
    }
    else if (x % 3 === 0) {
        console.log("Fizz")
    }
    else if (x % 5 === 0) {
        console.log("Buzz")
    }
    else {
    console.log(x)
    }
};
