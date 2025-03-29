let randomNumber = Math.random();

function getComputerChoice(randomNumber) {
  if (randomNumber <= 0.33) {
    return "Rock";
  } else if (randomNumber <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(getComputerChoice(randomNumber));

let randomNumber1 = prompt();

function getHumanChoice(randomNumber1) {
  if (randomNumber1 = "Rock") {
    return "Rock";
  } else if (randomNumber1 = "Paper") {
    return "Paper";
  } else if (randomNumber1 = "Scissors") {
    return "Scissors";
  }
}

console.log(getHumanChoice(randomNumber1));