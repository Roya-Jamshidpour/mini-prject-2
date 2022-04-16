window.alert("Welcome to our game!")
window.prompt("Choose R, P, or S")

let R = ("R")
let P = ("P")
let S = ("S")
let playerScore = 0
let computerScore = 0

const getUserChoice = userInput => {
 
    if(userInput === 'R' || userInput === 'P' || userInput === 'S') {
      return userInput; // if true, displays users input
    } else {
      return 'Error!' //Displays error message if user inputs anything other than the three parameters listed above
    }
  }

  const getComputerChoice = () => {
    const computerHand = Math.floor(Math.random() *3);
   switch (computerHand) {
    case 0:
    return 'R';
    case 1:
    return 'P';
    case 2: 
    return 'S';
   }
  };

  const determineWinner = (userChoice, getComputerChoice) => {
    if (userChoice === getComputerChoice) {
    return 'Game was a Tie!';
   } 
   if (userChoice === 'R') {
    if(getComputerChoice === 'P') {
    return 'The computer Won!';
    } else {
      return 'You Won!'
    }
  }
  if (userChoice === 'P') {
    if(getComputerChoice === 'S') {
    return 'The computer Won!';
    } else {
      return 'You Won!'
    }
    }
    if (userChoice === 'S') {
    if(getComputerChoice === 'R') {
    return 'The computer Won!';
    } else {
      return 'You Won!'
    }
  } 
  };
    window.alert(determineWinner)
  //window.confirm("play again?")


  
 



