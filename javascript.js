function getComputerChoice() {
    let max = 3
    let min = 1
    let move = Math.floor(Math.random() * (max - min + 1)) + min;
    if (move === 1) {
        return 'Rock';
    }
    else if (move === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors'
    }
}

function getPlayerChoice() {
    let choice = prompt('Rock, Paper, Scissors, Shoot!');
    let lowercaseChoice = choice.toLowerCase();
    console.log(lowercaseChoice);
    return lowercaseChoice;
    
}

function determinedWinner(playerChoicePassedInTheFunction, computerChoicePassedInTheFunction) {
    if (playerChoicePassedInTheFunction === computerChoicePassedInTheFunction) {
        return 'Tie'
    }
    if ((playerChoicePassedInTheFunction ==='rock' && computerChoicePassedInTheFunction === 'Paper') ||
    (playerChoicePassedInTheFunction === 'paper' && computerChoicePassedInTheFunction === 'Scissors') ||
    (playerChoicePassedInTheFunction === 'scissors' && computerChoicePassedInTheFunction === 'Rock')) {
        return 'You lose!'
    }

    if ((computerChoicePassedInTheFunction ==='Rock' && playerChoicePassedInTheFunction === 'paper') ||
    (computerChoicePassedInTheFunction === 'Paper' && playerChoicePassedInTheFunction === 'scissors') ||
    (computerChoicePassedInTheFunction === 'Scissors' && playerChoicePassedInTheFunction === 'rock')) {
        return 'You win!'
    }
}

let computerChoice = getComputerChoice();
console.log("The computer picked: "+computerChoice)

let playerChoice = getPlayerChoice();
console.log("The player picked: "+playerChoice)

let gameOutcome = determinedWinner(playerChoice, computerChoice);
console.log(gameOutcome)
