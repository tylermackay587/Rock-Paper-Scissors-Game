var gameStart = confirm("Shall we play a game?");
	while(gameStart == false){
	alert("Well what are you here for?");
	gameStart = confirm("Shall we play a game?");
}


if(gameStart){
	var userChoice = prompt("Rock, Paper or Scissors?");
	while(["ROCK", "PAPER", "SCISSORS"].indexOf(userChoice.toUpperCase()) < 0){
		userChoice = prompt("That is not a valid entry, please choose rock, paper or scissors");
	}

	var compNum = Math.random(),
	compChoice,
	winCount = 0,
	compWins=0;

	if(compNum <= 0.33){
	compChoice = "scissors";
	} else if (compNum > 0.33 && compNum <= 0.66){
	compChoice = "paper";
	} else if (compNum > 0.66){
	compChoice = "rock";}

	function play (userChoice1, compChoice1){
	if(userChoice1.toLowerCase() == compChoice1){
		return "It's a tie!";
	}

	if(userChoice1.toUpperCase() == "ROCK" && compChoice1 == "paper"){
		compWins++;
			return "The computer wins!";
		}
		else if (userChoice1.toUpperCase() == "ROCK" && compChoice1 == "scissors"){
			winCount++;
			return "The player wins!";
		}

	if(userChoice1.toUpperCase() == "PAPER" && compChoice1 == "scissors"){
		compWins++;
			return "The computer wins!";
		}
		else if (userChoice1.toUpperCase() == "PAPER" && compChoice1 == "rock"){
			winCount++;
			return "The player wins!";
		}

	if(userChoice1.toUpperCase() == "SCISSORS" && compChoice1 == "rock"){
		compWins++;
			return "The computer wins!";
		}
		else if (userChoice1.toUpperCase() == "SCISSORS" && compChoice1 == "paper"){
			winCount++;
			return "The player wins!";
		}
	}

	var result = play(userChoice ,compChoice);
	alert("Player chose: " + userChoice + "\nComputer chose: " + compChoice + "\n\n" + result + "\n\nPlayer win count: " + winCount +"\nComputer win count: " + compWins);

	var keepPlaying = confirm("Shall we play again?");

	while(keepPlaying){
	var userChoice = prompt("Rock, Paper or Scissors?");
	while(["ROCK", "PAPER", "SCISSORS"].indexOf(userChoice.toUpperCase()) < 0){
		userChoice = prompt("That is not a valid entry, please choose rock, paper or scissors");
	}

	var compNum = Math.random(),
	compChoice;

	if(compNum <= 0.33){
	compChoice = "scissors";
	}
	else if (compNum > 0.33 && compNum <= 0.66){
	compChoice = "paper";
	}
	else if (compNum > 0.66){
	compChoice = "rock";
	}

	var results = play(userChoice, compChoice);
	alert("Player chose: " + userChoice + "\nComputer chose: " + compChoice + "\n\n" + results + "\n\nPlayer win count: " + winCount +"\nComputer win count: " + compWins);
	var keepPlaying = confirm("Shall we play again?");
}
}
