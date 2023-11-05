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
        return "It's a draw, play again";
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

const playerParagraph = document.querySelector('.player')

const computerParagraph = document.querySelector('.computer')




let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let roundResult = playRound(playerSelection, getComputerChoice());

        if (roundResult == "Player wins") {
            playerScore++;
            message.textContent = "Player wins 🥳"
            playerParagraph.textContent = `Player: ${playerScore}`;
            computerParagraph.textContent = `Computer: ${computerScore}`

        } else if (roundResult == "Computer wins") {
            computerScore++;
            message.textContent = "Computer wins 🤖"
            playerParagraph.textContent = `Player: ${playerScore}`;
            computerParagraph.textContent = `Computer: ${computerScore}`
        } else if (roundResult == "It's a draw, play again") {
            message.textContent = "It's a tie! 😅"
            playerParagraph.textContent = `Player: ${playerScore}`;
            computerParagraph.textContent = `Computer: ${computerScore}`
        }


        if (playerScore == 5) {
            message.textContent = `Player wins! Start again! 🎉🎉🎉`
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            message.textContent = `Computer wins! Start again! 😭😭😭`
            playerScore = 0;
            computerScore = 0;
        }
    }
    )
}
)
