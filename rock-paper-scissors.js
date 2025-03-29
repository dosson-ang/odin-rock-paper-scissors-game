let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let choice = prompt("Type rock, paper, or scissors:");
  choice = choice.trim().toLowerCase();
  
  if (choice === "rock") {
    return "Rock";
  } else if (choice === "paper") {
    return "Paper";
  } else if (choice === "scissors") {
    return "Scissors";
  } else {
    return "Invalid choice"; 
  } 
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const humanChoice = getHumanChoice();
console.log("Player chose:", humanChoice);
if (humanChoice !== "Invalid choice") {
  console.log("Computer chose:", getComputerChoice());
}