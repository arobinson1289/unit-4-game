$(document).ready(function() {

    //Creat Variables For Game
var wins = 0;
var losses = 0;
var user_guess_total = 0;
var random_number="";
var new_game= false;
var crystal_value =[]; //My thinking is I'm going to assign to each crystal, a randomly generated number in an array 4 long

//Here we're creating some variables that pull HTML elements
var $wins = $("#wins");
var $losses = $("#losses");
var $user_guess_total = $("#user_guess_total");
var $random_number = $("#random_number");
var $new_game = $("#new_game");
var $crystal_value = $("#crystal_value");


//Begin With Creating A New Game

function newGame() {

    //Turn On The New Game Var
    new_game = true; 

    //Apply Random Number to random number
    random_number = Math.floor(Math.random() * 9)+1;
    $random_number.text(random_number);


    //Generate 4 random numbers in an arrayn when new-game is clicked
    
    crystal_value = [];

    for (i=0;i<4;i++) {
       var random_number= Math.floor((Math.random() * 10) + 1;
       crystal_value.push(random_number);
       console.log(crystal_value)
    }
    //The Above Code Isn't Working??
    //Below I will asign these array values to the ID's for my Crystal Values, Since the numbers are random, I was just going to asign them 1 to 1 by array value.
$("#new_game").on("click", function() {
}
}




}

//Next I would like to creation a function for when the crystals are clicked on their intrisic value is added to the user total. I would then have if statments for if userguess total=random number, this would alert a win and increase the winning total by ++, and if this total was > the random number, we would alert a loss ++

//I realize theres more I could do with regard to creating stop alls for new games so they don't generate in the middle, but for now i'm trying to get this working as is, and I'm struggle bus, so hopefully this goes alright and you see the work I tried to put in. 

//AR