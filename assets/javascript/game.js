var wins = 0;
var losses = 0;

function getRandomInt() {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + 19;
}

$("#doge1").on("click", function() {
    alert("Galatical doge");
    $("randomNumber").html(getRandomInt());
    });

$("#doge2").on("click", function() {
    alert("Pizza doge");
});

$("#doge3").on("click", function() {
    alert("Rainbow doge");
});

$("#doge4").on("click", function() {
    alert("Pow-wow doge");
});