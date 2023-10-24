//Create computer choice using the random number
function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3)+1;
    if (choiceNumber == 1){
        return "rock";
    }else if(choiceNumber == 2){
        return "raper";
    }else{
        return "scissors";
    }
}

console.log(getComputerChoice())