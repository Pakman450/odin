


function displayResult(){
    
}

function computerPlay(){ 
    const randnum = Math.floor(Math.random() * 3)+1;
    return randnum; 
}

let win_counter = 0
let lose_counter = 0
let counter = 0

function playRound(e) {

    counter++
    var player   = 0;
    var computerin ="";
    computerin = computerPlay()

    if (e.target.id ==="rock") {
        player = 1 
    } else if (e.target.id ==="paper") {
        player = 2
    } else if (e.target.id ==="scissor"){
        player = 3
    }

    let result = document.createElement(`div`)
    result.setAttribute('id','result')
    result.setAttribute('style', "padding: 50px;font-size: 100px;font-weight: bold;display: flex; align-items: center; justify-content: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ; ")

    let mark = document.createElement('div')
    mark.setAttribute('id','mark')
    mark.setAttribute('style', "font-size: 100px;font-weight: bold;display: flex; align-items: center; justify-content: center; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ; ")


    let delresult = document.querySelector('#result')
    let delresult_mark = document.querySelector('#mark')
    if (delresult !== null && delresult_mark !== null ){
        delresult.remove()
        delresult_mark.remove()
    }



    if (player == computerin){
        mark.textContent = 'Wins: ' + win_counter + ' Lost: ' + lose_counter 
        result.textContent = 'GAME: '+counter + ' | You tied!'
        const choice = document.querySelector('body');
        choice.appendChild(result)
        choice.appendChild(mark)
        
    }else if (player != computerin) {

        if (player == 1 && computerin == 2 || player == 2 && computerin == 3 || player == 3 && computerin ==1 ) {
            lose_counter++

            mark.textContent = 'Wins: ' + win_counter + ' Lost: ' + lose_counter 
            result.textContent = 'GAME: '+counter + ' | You lost!'
            const choice = document.querySelector('body');
            choice.appendChild(result)
            choice.appendChild(mark)
      
        } else {
            win_counter++
            mark.textContent = 'Wins: ' + win_counter + ' Lost: ' + lose_counter 
            result.textContent = 'GAME: '+counter + ' | You won!'
            const choice = document.querySelector('body');
            choice.appendChild(result)
            choice.appendChild(mark)
          
        }

    }

    if (counter === 5){
        delresult.remove()
        delresult_mark.remove()
        win_counter = 0
        lose_counter = 0
        counter = 0

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
