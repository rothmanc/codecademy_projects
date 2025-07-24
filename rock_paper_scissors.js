
// Function to get the user's choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
    return userInput

  else{
    console.log("Error: Please enter a valid choice")
  }
};

// Function to get the computer's choice
const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch(num){
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2: 
      return 'scissors'
  }
}

// Function to determine the winner
const determineWinner =(userChoice, computerChoice) => {

  if (userChoice === 'bomb'){
    return 'User Wins!'
  }
  
  if (userChoice === computerChoice){
    return "Game ended in a tie"
  }

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "Computer Wins!"
    }else{
      return "User Wins!"
    }

  }


  if (userChoice === 'paper'){
    if (computerChoice === 'scissors' || computerChoice === 'rock'){
      return "Computer Wins!"
    }else{
      return "User Wins!"
    }
  }

  if (userChoice === 'scissors'){
    if (computerChoice === 'rock' || computerChoice === 'paper'){
      return "Computer Wins!"
    }else{
      return "User Wins!"
    }

  }
}

// Function to play the game
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice))
}


playGame()