// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice= "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
    userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    var randomNumber = Math.random();
    var computerChoice= Math.random();
        if (computerChoice < 0.3){
            $("#computerChoice").text("rock");
        } 
        else if (computerChoice < 0.66){
            $("#computerChoice").text("paper");
        }
        else if (computerChoice < 1){
            $("#computerChoice").text("scissors");
        }
});


// DOCUMENT READY FUNCTION BELOW

