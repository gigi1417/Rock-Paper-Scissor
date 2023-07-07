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

let move = getComputerChoice();
console.log(move)