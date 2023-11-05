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




// Listen to player selection
const buttons = document.querySelectorAll('.image');
const message = document.querySelector('.message')
message.textContent = "Start the game! 🎉"


let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let roundResult = playRound(playerSelection, getComputerChoice());

        if (roundResult == "Player wins") {
            playerScore++;
            message.textContent = `${roundResult} |  Player: ${playerScore} | Computer: ${computerScore}`;

        } else if (roundResult == "Computer wins") {
            computerScore++;
            message.textContent = `${roundResult} |  Player: ${playerScore} | Computer: ${computerScore}`;
        } else if (roundResult == "its a draw, play again") {
            message.textContent = `${roundResult} |  Player: ${playerScore} | Computer: ${computerScore}`;
        }


        if (playerScore == 5) {
            message.textContent = `Player wins! Start again!`
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            message.textContent = `Computer wins! Start again!`
            playerScore = 0;
            computerScore = 0;

        }
    }
    )
}
)
