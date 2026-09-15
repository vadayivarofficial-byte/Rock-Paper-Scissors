function getComputerChoice (){
  let random = Math.random();

  if(random < 0.33){
    return "rock";                                  //This function generates random "rock", "paper" and scissors Choice.
  }
  else if (random < 0.66){
    return "paper";
  }
  else{
    return "scissors";
  }
}


function getHumanChoice(){
  return prompt("Let Play RPS!","are you ready!").trim().toLowerCase();           //This function get user input.
}

let humanScore = 0;
let computerScore = 0;                            //these are the variable that going to record scores of player.


function playRound(humanChoice, computerChoice) {
  
  if(humanChoice === "rock" && computerChoice === "scissors"){
    ++humanScore;
    return "You win! Rock beats Scissors";
  }
  else if (humanChoice === "scissors" && computerChoice === "paper"){
    ++humanScore;
    return "You win! Scissor beats paper";
  }
  else if (humanChoice === "paper" && computerChoice === "rock"){
    ++humanScore;
    return "You win! paper beats rock";
  }
  else if (humanChoice === "scissors" && computerChoice === "rock"){      // this functions play single round of rps.
    ++computerScore;
    return "You lose! Rock beats Scissors"; 
  }
  else if (humanChoice === "paper" && computerChoice === "scissors"){
    ++computerScore;
    return "You lose! Sicssors beats paper";
  }
  else if (humanChoice === "rock" && computerChoice === "paper"){
    ++computerScore;
    return "You lose! paper beats rock"
  }
  else {
    return "Tied";
  }
}

// Round 1
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

