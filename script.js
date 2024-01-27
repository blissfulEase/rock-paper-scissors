/* Create a rock-paper-scissors game where the user plays against the computer. 
The program takes case-insensitive input from the user, generates a selection between R,P or S for the computer, compares the two to determine the winner of a single round, and outputs a message with the result of the round. If there is a tie, the round starts again. 

Get selection from User
Generate random selection from computer
Compare userSelection and computerSelection
Output a string that declares the winner of the round
If TIE, round re-starts  */

function getComputerChoice() {
    let rock = 1;
    let scissors = 2;
    let paper = 3;

    let selection = Math.floor(Math.random() * 3) + 1;

    if (selection === rock) {
        return "rock";
    } else if (selection === scissors){
        return "scissors";
    } else if (selection === paper) {
        return "paper";
    }
}

