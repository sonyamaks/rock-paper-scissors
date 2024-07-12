// Variables
let humanScore = 0;
let computerScore = 0;
let draw = 0;
let count = 0;
let playerChoice = "";

// Variables for buttons
const b_rock = document.getElementById("b_rock");
const b_paper = document.getElementById("b_paper");
const b_scissors = document.getElementById("b_scissors");

// Functions for the buttons when they are clicked
b_paper.addEventListener("click", function () {
  playerChoice = 1;
  logChoice();
});

b_rock.addEventListener("click", function () {
  playerChoice = 0;
  logChoice();
});

b_scissors.addEventListener("click", function () {
  playerChoice = 2;
  logChoice();
});

// Logging user's choice and keeping track of score
function logChoice() {
  if (count == 5) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Game Over! Refresh the page to play again.";

    if (humanScore > computerScore) {
      document.getElementsByClassName("screen2")[0].innerText =
        "You won! " + humanScore + "-" + computerScore;
    } else if (computerScore > humanScore) {
      document.getElementsByClassName("screen2")[0].innerText =
        "Computer won! " + humanScore + "-" + computerScore;
    } else if ((computerScore = humanScore)) {
      "It's a draw!" + humanScore + "-" + computerScore;
    }
    return;
  }
  count++;
  playRound(playerChoice, getComputerChoice());
}

// Getting computer's choice
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 2);
  return computerChoice;
}

// Actual game function
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    document.getElementsByClassName("screen1")[0].innerText = "It is a Draw!";
    draw++;
  } else if (humanChoice === 0 && computerChoice === 2) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Computer chose Scissors! \n You win! ";
    humanScore++;
  } else if (humanChoice === 1 && computerChoice === 0) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Computer chose Rock! \n You win! ";
    humanScore++;
  } else if (humanChoice === 2 && computerChoice === 1) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Computer chose Paper! \n You win! ";
    humanScore++;
  } else if (humanChoice === 0 && computerChoice === 1) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Computer chose Paper! \n Computer wins! ";
    computerScore++;
  } else if (humanChoice === 1 && computerChoice === 2) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Computer chose Paper! \n Computer wins! ";
    computerScore++;
  } else if (humanChoice === 2 && computerChoice === 0) {
    document.getElementsByClassName("screen1")[0].innerText =
      "Computer chose Rock! \n Computer wins! ";
    computerScore++;
  }
}
