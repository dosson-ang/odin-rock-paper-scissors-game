function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let humanScore = 0;
let computerScore = 0;
let gameResults = document.querySelector("#gameResults");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    gameResults.textContent = `You win! Rock beats Scissors. Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    gameResults.textContent = `You lose! Paper beats Rock. Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'rock' && computerChoice === 'rock') {
    gameResults.textContent = `Rock against Rock is a draw! Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    gameResults.textContent = `You win! Paper beats Rock. Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    gameResults.textContent = `You lose! Scissors beats Paper. Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    gameResults.textContent = `Paper against Paper is a draw! Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    gameResults.textContent = `You win! Scissors beats Paper. Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    gameResults.textContent = `You lose! Rock beats Scissors. Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === 'scissors') {
    gameResults.textContent = `Scissors against Scissors is a draw! Scores: You - ${humanScore} Computer - ${computerScore}`;
  } 
}

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
  playRound('rock', getComputerChoice());
});

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
  playRound('paper', getComputerChoice());
});

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
  playRound('scissors', getComputerChoice());
});