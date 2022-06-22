



function computerPlay(){ 
    

    const randnum = Math.floor(Math.random() * 3)+1;
    var    result = "";


    // if (randnum === 1) {
    //     result = "rock";
    // } else if (randnum === 2) {
    //     result = "paper"
    // } else {
    //     result = "scissor"
    // }
    
    
    return randnum; 
}


function playRound(e, computerin) {



    var player   = 0;
    var computer ="";
    var result = "";

    //needed to make sure that the player's input is all different capitalizations.
    console.log(e.id)
    // playerin = e.id
    // playerin.toLowerCase();

    // if (e.id =="rock") {
    //     player = 1 
    // } else if (e.id =="paper") {
    //     player = 2
    // } else if (e.id =="scissor"){
    //     player = 3
    // }


    // if (player == computerin){
    //     return "IT'S A TIE";
    // }else if (player != computerin) {

    //     if (player == 1 && computerin == 2 || player == 2 && computerin == 3 || player == 3 && computerin ==1 ) {
    //         return "YOU LOST";
    //     } else {
    //         return "YOU WON";
    //     }

    // }


    return "lol"

}


  
// const playerSelection = "paper";
const computerSelection = computerPlay();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

const buttons = document.querySelectorAll('button');
var list_Button = Array.from(buttons)

list_Button.forEach(btn => btn.addEventListener('click',e=> {
    return playRound(e, computerSelection);
}));