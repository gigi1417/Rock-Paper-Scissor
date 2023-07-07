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

function determinedWinner(playerChoicePassedInTheFunction, computerChoicePassedInTheFunction) {
    if (playerChoicePassedInTheFunction === computerChoicePassedInTheFunction) {
        return 'Tie'
    }
    if ((playerChoicePassedInTheFunction ==='Rock' && computerChoicePassedInTheFunction === 'Paper') ||
    (playerChoicePassedInTheFunction === 'Paper' && computerChoicePassedInTheFunction === 'Scissors') ||
    (playerChoicePassedInTheFunction === 'Scissors' && computerChoicePassedInTheFunction === 'Rock')) {
        return 'You lose!'
    }

    if ((computerChoicePassedInTheFunction ==='Rock' && playerChoicePassedInTheFunction === 'Paper') ||
    (computerChoicePassedInTheFunction === 'Paper' && playerChoicePassedInTheFunction === 'Scissors') ||
    (computerChoicePassedInTheFunction === 'Scissors' && playerChoicePassedInTheFunction === 'Rock')) {
        return 'You win!'
    }
}

let computerChoice = getComputerChoice();
console.log("The computer picked: "+computerChoice)

let playerChoice = getPlayerChoice();
console.log("The player picked: "+playerChoice)

let gameOutcome = determinedWinner(playerChoice, computerChoice);
console.log(gameOutcome)
