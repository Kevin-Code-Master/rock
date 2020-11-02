//computer choices
function computerPlay() {
	let random = Math.floor(Math.random()*3);
	if (random === 0) {
		return "rock";
	}
	else if (random === 1) {
		return "paper";
	}
	else{
		return "scissors";
	}
}
function playRound(playerSelection,computerSelection){
	playerSelection = playerSelection.toLowerCase();
	//conditions for draw
	if (playerSelection == "rock" && computerSelection == "rock") {
		return "Yay! It is a draw! Rock Vs Rock";
	}
	else if (playerSelection == "paper" && computerSelection == "paper") {
		return "Yay! It is a draw! Paper Vs Paper";
	}
	else if (playerSelection == "scissors" && computerSelection == "scissors") {
		return "Yay! It is a draw! Scissors Vs Scissors";
	}
	else if (playerSelection == "rock" && computerSelection == "scissors") {
		return "Yaay you win: Rock smashes scissors: Rock Vs Scissors";
	}
	else if (playerSelection == "scissors" && computerSelection == "rock") {
		return "Computer Wins: Rock smashes scissors: Scissors Vs Rock";
	}
	else if (playerSelection == "scissors" && computerSelection == "paper") {
		return "Yaaay you win: Scissors beat Paper: Scissors Vs Paper";
	}
	else if (playerSelection == "paper" && computerSelection == "scissors") {
		return "Computer Wins: Scissors beat Paper: Paper Vs Scissors";
	}
	else if (playerSelection == "paper" && computerSelection == "rock") {
		return "Yaaay you win: Paper wraps rock: Paper Vs Rock";
	}
	else{
		return "Computer Wins: Paper wraps Rock.Rock Vs Paper";
	}
};
function game() {
    console.log(playRound(prompt("Rock,Paper or Scissor?"), computerPlay()));
    console.log(playRound(prompt("Rock,Paper or Scissor?"), computerPlay()));
    console.log(playRound(prompt("Rock,Paper or Scissor?"), computerPlay()));
    console.log(playRound(prompt("Rock,Paper or Scissor?"), computerPlay()));
    console.log(playRound(prompt("Rock,Paper or Scissor?"), computerPlay()));
}
game();