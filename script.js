let playerScore = 0;
let computerScore = 0;
const maxScore = 20;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerChoice) {
  if (playerScore >= maxScore || computerScore >= maxScore) return;

  const computerChoice = getComputerChoice();
  document.getElementById("yourChoice").textContent = playerChoice;
  document.getElementById("computerChoice").textContent = computerChoice;

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  document.getElementById("resultText").textContent = result;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;

  if (playerScore === maxScore) {
    document.getElementById("finalMessage").textContent = "🎉 You won the game! 🎉";
    document.body.style.background = "green";
    document.getElementById("confetti").style.display = "block";
  }

  if (computerScore === maxScore) {
    document.getElementById("finalMessage").textContent = "💔 You lost! Better luck next time!";
    document.body.style.background = "darkred";
    document.getElementById("confetti").style.display = "none";
  }
}
