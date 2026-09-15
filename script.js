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
