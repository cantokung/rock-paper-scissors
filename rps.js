// Rock Paper Scissor (RPS)
const welcome = "Welcome to a game of Rock-Paper-Scissor. Please select one"
console.log(welcome)
function getComputerChoice(){
    var choice
    Math.floor(Math.random() * 3);
    switch(Math.floor(Math.random() * 3)) {
        case 0:
          choice = "rock"
          break;
        case 1:
          choice = "paper"
          break;
        case 2:
          choice = "scissor"
          break;
      }
    return choice
}

function playRound(playerSelection ,computerSelection){
    
    
    var cond
    if (playerSelection == computerSelection){
        cond = "tie"
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        cond = "computer"
    } else if (playerSelection == 'rock' && computerSelection == 'scissor'){
        cond = "player"
    } else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        cond = "player"
    } else if (playerSelection == 'scissor' && computerSelection == 'rock'){
        cond = "computer"
    } else if (playerSelection == 'paper' && computerSelection == 'scissor'){
        cond = "computer"
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        cond = "player"
    }
    return cond
}

function game(){
    counter = 0
    let playerwin = 0
    let computerwin = 0
    let winner 
    while (counter < 1000){
        let checkInput = true
        playerSelection = prompt("What's your choice?");
        while (checkInput){
            playerSelection = playerSelection.toLowerCase()
            if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor'){
                playerSelection = prompt("Your choice is weird")
            } else {
                checkInput = false
            }
        }
        computerSelection = getComputerChoice();
        console.log("player select: " + playerSelection)
        console.log("computer select: " +computerSelection)
        result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (result == 'player'){
            playerwin++
        } else if (result == "computer"){
            computerwin++
        } 
        if (playerwin >= 3){
            winner = "player"
            break
        } else if (computerwin >=3){
            winner = "computer"
            break
        }
        console.log("computer wins " + computerwin + " times")
        counter++
        
    }
    console.log("The winner goes to " + winner)

}

game()