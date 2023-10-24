//Create computer choice using the random number
function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    if (choiceNumber == 1) {
        return "rock";
    } else if (choiceNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "its a draw, play again";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins"
    } else {
        return "Wrong input!"
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose: rock, paper or scissors!").toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "Player wins") {
            playerScore++;
        } else if (roundResult == "Computer wins") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        alert(`You win! Congrats!! Your result is ${playerScore} and computers: ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lose! Fucking loser! Your result is ${playerScore} and computers: ${computerScore}`);
    } else{
        alert(`It's a draw! You both got ${playerScore} points`);
    }
}

playGame();