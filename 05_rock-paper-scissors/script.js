let choices;
let hunmanScore, computerScore = 0;
function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
}


function getHumanChoice() {
    let askHumanChoice = window.prompt("Choose ur decision");
    return askHumanChoice;
}

function playRound(humanChoice, computerChoice) {

}


getComputerChoice()