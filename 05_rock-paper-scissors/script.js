let choices;
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    choices = ['rock', 'paper', 'scissor']
    let randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
}

function getHumanChoice() {
    let askHumanChoice = window.prompt("Choose ur decision");
    return askHumanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        return console.log("same choice!No one wins");
    }
    else if (humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "rock" && computerChoice == "scissor"
        || humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++
        return console.log("You win!!");
    }
    else {
        computerScore++
        return console.log("computer wins!!");
    }
}

function playGame() {

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

}
playGame()