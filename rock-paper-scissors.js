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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Invalid choice") {
    console.log("Invalid choice, round not played.");
    return;
  }
  
  console.log("Player chose:", humanChoice);
  console.log("Computer chose:", computerChoice);
  
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win!", humanChoice, "beats", computerChoice);
    humanScore++;
  } else {
    console.log("You lose!", computerChoice, "beats", humanChoice);
    computerScore++;
  }
}