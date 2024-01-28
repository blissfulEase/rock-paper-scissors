/* Create a rock-paper-scissors game where the user plays against the computer. 
The program takes case-insensitive input from the user, generates a selection between R,P or S for the computer, compares the two to determine the winner of a single round, and outputs a message with the result of the round. If there is a tie, the round starts again. 

Get selection from User
Generate random selection from computer
Compare userSelection and computerSelection
Output a string that declares the winner of the round
If TIE, round re-starts  */

let playerSelection = prompt("Rock, Paper, Scissors");


function getComputerChoice() {
  let rock = 1;
  let scissors = 2;
  let paper = 3;

  let selection = Math.floor(Math.random() * 3) + 1;

  if (selection === rock) {
    return "rock";
  } else if (selection === scissors) {
    return "scissors";
  } else if (selection === paper) {
    return "paper";
  }
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "lost";
  } else {
    return "win";
  }
}

function game() {
  
  let score = 1;
  let ties = 0;

  for (let i = 0; i < 5; i++) {
   
    console.log(playRound(playerSelection,computerSelection));
    
    let roundResult = playRound(playerSelection,computerSelection);

    if (playRound(playerSelection,computerSelection) === "tie") {
      ties++;
    } else if (playRound(playerSelection,computerSelection) === "lost") {
      score--;
    } else if (playRound(playerSelection,computerSelection) === "win") {
      score++;
    }

    playerSelection = prompt(`You ${roundResult} this round. Play again!`);
    computerSelection = getComputerChoice();

  }

  if (ties === 3) {
    return "The game was Tied";
  } else if (score > 2) {
    return `You won the game C:`;
  } else {
    return `You lost the game :C`;
  }
  
}


let computerSelection = getComputerChoice();
console.log(game());
