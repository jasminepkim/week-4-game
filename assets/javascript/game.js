$(document).ready(function() {

// Variables to create number counters
var wins = 0;
var losses = 0;
var userCounter = 0;
var randomNumberComp = 0;
var dogePoints = {};
reset();

// FUNCTIONS

// Function for computer's random number generator from 19-120
function getRandomIntComp() {
    return Math.floor(Math.random() * (120 - 19)) + 19;
}

// Function for user's random number generator from 1-12
function getRandomIntUser() {
    return Math.floor(Math.random() * (12 - 1)) + 1;
}

// Function to reset the number counters
function reset() {
    userCounter = 0;
    randomNumberComp = getRandomIntComp();
    dogePoints = {
        "doge1": getRandomIntUser(),
        "doge2": getRandomIntUser(),
        "doge3": getRandomIntUser(),
        "doge4": getRandomIntUser(),
    }
    $("#userCounter").html(userCounter);
    $("#randomNumber").html(randomNumberComp);  // do not try to pass a function through!
}

// Function to tally up the user points 
function play() {
    if (userCounter === randomNumberComp) {  
        wins++;
        $("#wins").html(wins);
        $("#alert").text("SUCH WIN!");
        reset();
    } 
    
    else if (userCounter > randomNumberComp) {  
        losses++;
        $("#losses").html(losses);
        $("#alert").text("SUCH LOST!");
        reset();
    }
}

// DOGE BUTTONS

$("#doge1").on("click", function () {
    console.log("Galatical doge");
    userCounter += dogePoints.doge1;
    console.log(userCounter);
    $("#userCounter").html(userCounter);
    play();
});

$("#doge2").on("click", function () {
    console.log("Pizza doge");
    $("#userCounter").html(userCounter);
    userCounter += dogePoints.doge2;
    console.log(userCounter);
    $("#userCounter").html(userCounter);
    play();
});

$("#doge3").on("click", function () {
    console.log("Rainbow doge");
    userCounter += dogePoints.doge3;
    console.log(userCounter);
    $("#userCounter").html(userCounter);
    play();
});

$("#doge4").on("click", function () {
    console.log("Pow-wow doge");
    userCounter += dogePoints.doge4;
    console.log(userCounter);
    $("#userCounter").html(userCounter);
    play();
});
})