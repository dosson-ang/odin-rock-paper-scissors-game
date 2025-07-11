function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanAnswer = prompt("Type in either 'rock', 'paper', or 'scissors':");
  let humanAnswerInLowerCase = humanAnswer.toLowerCase();

  if (humanAnswerInLowerCase === "rock") {
    return "rock";
  } else if (humanAnswerInLowerCase === "paper") {
    return "paper";
  } else if (humanAnswerInLowerCase === "scissors") {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("Rock against Rock is a draw!");
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("Paper against Paper is a draw!");
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("Scissors against Scissors is a draw!");
  } 
}