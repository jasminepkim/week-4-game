// Variables to create number counters
var wins = 0;
var losses = 0;
var randomNumberComp = getRandomIntComp();
var randomNumberUser = getRandomIntUser();

// FUNCTIONS

// Function for computer's random number generator from 19-20
function getRandomIntComp() {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + 19;
}

// Function for user's random number generator from 1-12
function getRandomIntUser() {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min)) + 1;
}

// Function to reset the number counters
function reset() {
    var randomNumberComp = getRandomIntComp();
    var randomNumberUser = getRandomIntUser();
}

// This updates the random number counter generated by the computer at each reset
$("#randomNumber").html(getRandomIntComp());


// $("#doge1").on("click", function() {
//     alert("Galatical doge");
//     //this is connecting the HTML id to the random number function
//     $("#randomNumber").html(getRandomIntComp()); 
//     });

// DOGE BUTTONS

$("#doge1").on("click", function () {
    alert("Galatical doge");
});

$("#doge2").on("click", function () {
    alert("Pizza doge");
});

$("#doge3").on("click", function () {
    alert("Rainbow doge");
});

$("#doge4").on("click", function () {
    alert("Pow-wow doge");
});