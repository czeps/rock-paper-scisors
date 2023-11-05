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
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const resultContainer = document.createElement('div')
container.appendChild(resultContainer);


let playerScore = 0;
let computerScore = 0;

// const rockButton = document.querySelector('#rock');
// const paperButton = document.querySelector('#paper');
// const scissorsButton = document.querySelector('#scissors')


//  rockButton.addEventListener('click', () => {
//     let result = playRound("rock", getComputerChoice());
//     console.log(result)
//     if (result = "Player wins") {
//         playerScore++;
//     } else if (result == "Computer wins") {
//         computerScore++;
//     };

// });

// paperButton.addEventListener('click', () => {
//     let result = playRound("paper", getComputerChoice());
//     if (result = "Player wins") {
//         playerScore++;
//     } else if (result == "Computer wins") {
//         computerScore++;
//     }
// })

// scissorsButton.addEventListener('click', () => {
//     let result = playRound("scissors", getComputerChoice());
//     if (result = "Player wins") {
//         playerScore++;
//     } else if (result == "Computer wins") {
//         computerScore++;
//     }
// })


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let roundResult = playRound(playerSelection, getComputerChoice());

        if (roundResult == "Player wins") {
            playerScore++;
            resultContainer.textContent = `${roundResult} |  Player: ${playerScore} | Computer: ${computerScore}`;

        } else if (roundResult == "Computer wins") {
            computerScore++;
            resultContainer.textContent = `${roundResult} |  Player: ${playerScore} | Computer: ${computerScore}`;
        } else if (roundResult == "its a draw, play again") {
            resultContainer.textContent = `${roundResult} |  Player: ${playerScore} | Computer: ${computerScore}`;
        }


        if (playerScore == 5) {
            resultContainer.textContent = `Player wins! Start again!`
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            resultContainer.textContent = `Computer wins! Start again!`
            playerScore = 0;
            computerScore = 0;

        }
    }
    )
}
)
