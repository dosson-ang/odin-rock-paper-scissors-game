function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <=0.66) {
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