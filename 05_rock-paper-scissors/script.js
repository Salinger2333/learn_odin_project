let choices;
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
}
const resultDiv = document.querySelector('#results');
const humanScoreDiv = document.querySelector('#human-score');
const computerScoreDiv = document.querySelector('#computer-score');
const showHumanScore = function () {
    humanScoreDiv.textContent = `${humanScore}`
}
const showComputerScore = function () {
    computerScoreDiv.textContent = `${computerScore}`
}
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        resultDiv.textContent = `same choice!No one wins`
    }
    else if (humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "rock" && computerChoice == "scissors"
        || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        resultDiv.textContent = "You win!!";
        showHumanScore()
    }
    else {
        computerScore++
        resultDiv.textContent = "computer wins!!";
        showComputerScore()
    }
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "你" : "电脑";
        alert(`游戏结束！${winner}赢了！`);
        humanScore = computerScore = 0;
        showComputerScore();
        showHumanScore();
        resultDiv.textContent = "新游戏开始，请出拳！";
    }

}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const buttons = document.querySelector('.buttons')
buttons.addEventListener('click', (e) => {
    switch (e.target) {
        case rockBtn:
            playRound('rock', getComputerChoice())
            break
        case paperBtn:
            playRound('paper', getComputerChoice())
            break
        case scissorsBtn:
            playRound('scissors', getComputerChoice())
            break
    }
})


// function getHumanChoice() {
//     let askHumanChoice = window.prompt("Choose ur decision");
//     return askHumanChoice;
// }


// function playGame() {

//     for (let i = 1; i <= 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

// }
// playGame()