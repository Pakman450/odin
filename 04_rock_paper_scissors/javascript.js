


function displayResult(){
    
}

function computerPlay(){ 
    const randnum = Math.floor(Math.random() * 3)+1;
    return randnum; 
}


function playRound(e) {
    var player   = 0;
    var computerin ="";
    var result = "";
    computerin = computerPlay()
    //needed to make sure that the player's input is all different capitalizations.
    // console.log(e.target.id)
    // console.log(computerin)
    // playerin = e.id
    // playerin.toLowerCase();

    if (e.target.id ==="rock") {
        player = 1 
    } else if (e.target.id ==="paper") {
        player = 2
    } else if (e.target.id ==="scissor"){
        player = 3
    }

    // console.log(player)

    if (player == computerin){
        console.log("IT'S A TIE")
        return "IT'S A TIE";
    }else if (player != computerin) {

        if (player == 1 && computerin == 2 || player == 2 && computerin == 3 || player == 3 && computerin ==1 ) {
            console.log("YOU LOST")
            return "YOU LOST";
        } else {
            console.log("YOU WON")
            return "YOU WON";
        }

    }
}


  
// const playerSelection = "paper";
var computerSelection = computerPlay();
console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

const buttons = document.querySelectorAll('button');
var list_Button = Array.from(buttons)



list_Button.forEach(btn => btn.addEventListener('click',e=> playRound(e)));

// console.log(computerSelection);
