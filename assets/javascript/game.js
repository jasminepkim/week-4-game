// Variables to create number counters
var wins = 0;
var losses = 0;
var userCounter = 0;
var randomNumberComp = 0;
var dogePoints = {};

// FUNCTIONS

function reset() {
    userCounter = 0;
    randomNumberComp = Math.floor(Math.random() * (120 - 19)) + 19;
    dogePoints = {
        "doge1": Math.floor(Math.random() * (12 - 1)) + 1,
        "doge2": Math.floor(Math.random() * (12 - 1)) + 1,
        "doge3": Math.floor(Math.random() * (12 - 1)) + 1,
        "doge4": Math.floor(Math.random() * (12 - 1)) + 1,
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
$(document).ready(function() {

    reset();

$("#doge1").on("click", function () {
    userCounter += dogePoints.doge1; // from every click, this value gets added to the global variable "userCounter"
    $("#userCounter").html(userCounter);
    play();
});

$("#doge2").on("click", function () {
    userCounter += dogePoints.doge2;
    $("#userCounter").html(userCounter);
    play();
});

$("#doge3").on("click", function () {
    userCounter += dogePoints.doge3;
    $("#userCounter").html(userCounter);
    play();
});

$("#doge4").on("click", function () {
    userCounter += dogePoints.doge4;
    $("#userCounter").html(userCounter);
    play();
});
});