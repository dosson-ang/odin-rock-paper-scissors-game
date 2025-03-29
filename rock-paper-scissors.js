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