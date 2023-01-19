
const moves = ['rock', 'paper', 'scissors'];

while (true) {
  // get user move
  let userMove = prompt("Enter your move (rock, paper, scissors): ");

  // check if user entered a valid move
  if (!moves.includes(userMove)) {
    alert("Invalid move, try again.");
    continue;
  }

  // get computer move
  let computerMove = moves[Math.floor(Math.random() * moves.length)];
  alert("Computer move: " + computerMove);

  // determine the winner
  if (userMove === computerMove) {
    alert("It's a tie!");
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  ) {
    alert("You win!");
  } else {
    alert("You lose!");
  }

  // ask if user wants to play again
  let playAgain = prompt("Do you want to play again? (yes/no) ");
  if (playAgain.toLowerCase() !== "yes") {
    break;
  }
}
