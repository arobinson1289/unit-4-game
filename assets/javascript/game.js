//Create Variables For Game
var wins = 0;
var losses = 0;
var targetNumber;
var totalScore = 0;
//create function that selects random number with min and max variables
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}


//Begin With Creating A New Game Function
function newGame() {
    //Apply Random Number to random number
    targetNumber = randomNum(10,150);
    totalScore = 0;
    //set randomized values for crystals
    $("#green_crystal").attr("data-value",randomNum(1,10));
    $("#yellow_crystal").attr("data-value",randomNum(1,10));
    $("#pink_crystal").attr("data-value",randomNum(1,10));
    $("#blue_crystal").attr("data-value",randomNum(1,10));

    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#user_total").text(totalScore)
    $("#target_value").text(targetNumber)
}

$(".crystalImages").click(function() {
    //get crystal value
    var crystalValue = $(this).data("value")
    //add to score
    totalScore += crystalValue
    //compare scores of crystals
    if (totalScore === targetNumber){
        wins++
        newGame();
        console.log (wins);
    }
    else if (totalScore > targetNumber){
        losses ++;
        $("#losses")
        newGame();
    }
    else {
        $("#user_total").text(totalScore);
    }
});
$("#newGameButton").click(function(){
    newGame();
})
    