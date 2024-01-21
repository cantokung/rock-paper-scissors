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
    
    
    if (playerSelection === computerSelection){
        return "tie";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return "player";
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return "player";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return "player";
    } else {
        return "computer";
    }
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

//game()
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase()
        console.log('Player choice :' +playerSelection)
        
        let computerChoice = getComputerChoice()
        console.log('Computer choice : ' + computerChoice )
        result = playRound(playerSelection,getComputerChoice())
        console.log('Winner is : ' + result)
        if (result === 'player') {
            playerScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
        updateScoreBoard();
        checkGameOver();
    })
});

const showResult = document.querySelector('.showResult')

function updateScoreBoard(){
    const ScoreBoard = document.querySelector('.keepScore')
    ScoreBoard.textContent = 'Player: '+ playerScore + ' - Computer: ' + computerScore;

}

const restart = document.createElement('button')
restart.textContent ='Restart'
function checkGameOver(){
    if (playerScore >=3 || computerScore>=3){
        const resultMessage = document.createElement('P')
        const winner = playerScore>= 3? 'Player':'Computer';
        resultMessage.textContent = 'The game is over, the winner is '+ winner
        const ScoreBoard = document.querySelector('.keepScore')
        ScoreBoard.appendChild(resultMessage)

        // Optionally disable the buttons
        buttons.forEach(button => {
            button.disabled = true;
        });

        ScoreBoard.appendChild(restart)
    }

}

restart.addEventListener('click',()=>{
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button => {
        button.disabled = false;
    });
    const keepScoreElement = document.querySelector('.keepScore')
    keepScoreElement.innerHTML = '';
    keepScoreElement.innerHTML = 0;
})