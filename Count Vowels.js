var text = prompt("Enter a string and we will count the vowels");
var textLower = text.toLowerCase();
var acount = 0;
var ecount = 0;
var icount = 0;
var ocount = 0;
var ucount = 0;
for (x = 0; x < textLower.length; x++) {
    if (textLower[x] === "a") {
        acount = acount +1;
    }
    else if (textLower[x] === "e") {
        ecount = ecount +1;
    }
     else if (textLower[x] === "i") {
        icount = icount +1;
    }
     else if (textLower[x] === "o") {
        ocount = ocount +1;
    }
     else if (textLower[x] === "u") {
        ucount = ucount +1;
    }
};
var vcount = acount + ecount + icount + ocount + ucount

if (acount > 0) { 
    console.log("The number of A's in the string is " + acount);
}
if (ecount > 0) { 
    console.log("The number of E's in the string is " + ecount);
}
if (icount > 0) { 
    console.log("The number of I's in the string is " + icount);
}
if (ocount > 0) { 
    console.log("The number of O's in the string is " + ocount);
}
if (ucount > 0) { 
    console.log("The number of U's in the string is " + ucount);
}
if (vcount > 0) { 
    console.log("The number of vowels in the string is " + vcount);
}
else {
    console.log("Sorry there are no vowels in this string.")
}
