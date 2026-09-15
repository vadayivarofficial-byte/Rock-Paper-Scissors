function getComputerChoice() {
  let random = Math.random();

  if (random < 0.33) {
    return "rock"; //This function generates random "rock", "paper" and scissors Choice.
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Let Play RPS!", "are you ready!"); //This function get user input.
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0; //these are the variable that going to record scores of player.

  function playRound(humanChoice, computerChoice) {
    if (humanChoice.trim().toLowerCase() === "rock" && computerChoice === "scissors") {
      ++humanScore;
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice.trim().toLowerCase() === "scissors" && computerChoice === "paper") {
      ++humanScore;
      console.log("You win! Scissors beats paper");
    } else if (humanChoice.trim().toLowerCase() === "paper" && computerChoice === "rock") {
      ++humanScore;
      console.log("You win! paper beats rock");
    } else if (humanChoice.trim().toLowerCase() === "scissors" && computerChoice === "rock") {
      // this functions play single round of rps.
      ++computerScore;
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice.trim().toLowerCase() === "paper" && computerChoice === "scissors") {
      ++computerScore;
      console.log("You lose! Sicssors beats paper");
    } else if (humanChoice.trim().toLowerCase() === "rock" && computerChoice === "paper") {
      ++computerScore;
      console.log("You lose! paper beats rock");
    } else {
      console.log("Tied");
    }
  }

  // Round 1
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  // Round 2
  const humanSelection2 = getHumanChoice();
  const computerSelection2 = getComputerChoice();
  playRound(humanSelection2, computerSelection2);
  // Round 3
  const humanSelection3 = getHumanChoice();
  const computerSelection3 = getComputerChoice();
  playRound(humanSelection3, computerSelection3);
  // Round 4
  const humanSelection4 = getHumanChoice();
  const computerSelection4 = getComputerChoice();
  playRound(humanSelection4, computerSelection4);
  // Round 5
  const humanSelection5 = getHumanChoice();
  const computerSelection5 = getComputerChoice();
  playRound(humanSelection5, computerSelection5);

  if (humanScore > computerScore) {
    console.log("You win! Your score is " + humanScore);
  } else if (computerScore > humanScore) {
    console.log("You lose! Computer score is " + computerScore);
  } else {
    console.log("It's a tie!");
  }
}

playGame();
