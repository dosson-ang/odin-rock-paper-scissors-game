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
let roundResults = document.querySelector("#roundResults");
let finalResults = document.querySelector("#finalResults");

function endGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function checkGameOver() {
  if (humanScore === 5) {
    finalResults.textContent = 'You have reached 5 points! You win the game!';
    endGame();
  } else if (computerScore === 5) {
    finalResults.textContent = 'The computer has reached 5 points! You lose the game!';
    endGame();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    roundResults.textContent = `You win! Rock beats Scissors. Scores: You - ${humanScore} Computer - ${computerScore}`;
    checkGameOver();
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    roundResults.textContent = `You lose! Paper beats Rock. Scores: You - ${humanScore} Computer - ${computerScore}`;
    checkGameOver();
  } else if (humanChoice === 'rock' && computerChoice === 'rock') {
    roundResults.textContent = `Rock against Rock is a draw! Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    roundResults.textContent = `You win! Paper beats Rock. Scores: You - ${humanScore} Computer - ${computerScore}`;
    checkGameOver();
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    roundResults.textContent = `You lose! Scissors beats Paper. Scores: You - ${humanScore} Computer - ${computerScore}`;
    checkGameOver();
  } else if (humanChoice === 'paper' && computerChoice === 'paper') {
    roundResults.textContent = `Paper against Paper is a draw! Scores: You - ${humanScore} Computer - ${computerScore}`;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    roundResults.textContent = `You win! Scissors beats Paper. Scores: You - ${humanScore} Computer - ${computerScore}`;
    checkGameOver();
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    roundResults.textContent = `You lose! Rock beats Scissors. Scores: You - ${humanScore} Computer - ${computerScore}`;
    checkGameOver();
  } else if (humanChoice === "scissors" && computerChoice === 'scissors') {
    roundResults.textContent = `Scissors against Scissors is a draw! Scores: You - ${humanScore} Computer - ${computerScore}`;
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