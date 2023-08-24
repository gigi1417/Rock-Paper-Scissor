const rock = "rock"
const paper = "paper"
const scissors = "scissors"

/*
 * Parameters: None
 * Returns: String ('Rock', 'Paper', 'Scissor')
 * 
 * Description: Picks a random number between 1-3 to pick move
 * It will then return that move based on a number:
 * 1: Rock
 * 2: Paper
 * 3: Scissors
 */

function getComputerChoice() {
    let max = 3
    let min = 1
    let move = Math.floor(Math.random() * (max - min + 1)) + min;
    if (move === 1) {
        return rock;
    }
    else if (move === 2) {
        return paper;
    }
    else {
        return scissors
    }
}

/*
 * Parameters: none
 * Returns: String (user input)
 * 
 * Description: Prompting the user to chose an input for round. 
 * Automatically makes players input case insentive/ lower case
 */

function getPlayerChoice() {
    let choice = prompt('Rock, Paper, Scissors, Shoot!');
    let lowercaseChoice = choice.toLowerCase();
    console.log(lowercaseChoice);
    return lowercaseChoice;
    
}

/*
 * Parameters: (String, String)
 * Returns: String ('Tie', 'You lose!', 'You won!')
 * 
 * Description: Using if statements to determine a winnner and loser based on the player's input and computer's choice.
 * If statements are using logical operations AND and OR.
 */

function determinedWinner(playerChoicePassedInTheFunction, computerChoicePassedInTheFunction) {
    if (playerChoicePassedInTheFunction === computerChoicePassedInTheFunction) {
        return 'Tie'
    }
    if ((playerChoicePassedInTheFunction ==='rock' && computerChoicePassedInTheFunction === paper) ||
    (playerChoicePassedInTheFunction === 'paper' && computerChoicePassedInTheFunction === scissors) ||
    (playerChoicePassedInTheFunction === 'scissors' && computerChoicePassedInTheFunction === rock)) {
        return 'You lose!'
    }

    if ((computerChoicePassedInTheFunction === rock && playerChoicePassedInTheFunction === 'paper') ||
    (computerChoicePassedInTheFunction === paper && playerChoicePassedInTheFunction === 'scissors') ||
    (computerChoicePassedInTheFunction === scissors && playerChoicePassedInTheFunction === 'rock')) {
        return 'You win!'
    }
}

/*
 * Parameters: None
 * Returns: String ('Tie', 'You lose!', 'You won!')
 * 
 * Description: Logging player's input and computer's choice to the console. 
 * Returning determinedWinner() string.
 */

function playRound() {
    let computerChoice = getComputerChoice();
    console.log("The computer picked: "+computerChoice)

    let playerChoice = getPlayerChoice();
    console.log("The player picked: "+playerChoice)

    let roundOutcome = determinedWinner(playerChoice, computerChoice);
    return roundOutcome
}

/*
 * Description: 
 */


/* 
*create an if statement for what playRound returns. If it returns an options 3 times then that is the determined game winner.
*/
let playerWins = 0
let computerWins = 0

for (let i = 0; i < 5; i++) {
    let roundOutcome = playRound();
    if (roundOutcome === 'You win!'){
        playerWins++
    } else if (roundOutcome === 'You lose!'){
        computerWins++
    }

    console.log(playerWins)
    console.log(computerWins)
}

if (playerWins > computerWins){
    console.log('You win!')
} else if (playerWins < computerWins){
    console.log('You lose! You FUCKING DUMBASS!')
}