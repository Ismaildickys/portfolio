function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}

function rock() {
    const computerMove = pickComputerMove();
    let result = '';

    if (computerMove === 'Rock') {
        result = 'Tie.';
    } else if (computerMove === 'Paper') {
        result = 'You lose.';
    } else if (computerMove === 'Scissors') {
        result = 'You WIN!.'
    }
    
    alert(`Your move is Rock and Computer is ${computerMove}. ${result}`);
}

function paper() {
    const computerMove = pickComputerMove();
    let result = '';

    if (computerMove === 'Rock') {
        result = 'You WIN!.';
    } else if (computerMove === 'Paper') {
        result = 'Tie';
    } else if (computerMove === 'Scissors') {
        result = 'You lose.'
    }
    
    alert(`Your move is Paper and Computer is ${computerMove}. ${result}`);
}

function scissors() {
    const computerMove = pickComputerMove();
    let result = '';

    if (computerMove === 'Rock') {
        result = 'You lose.';
    } else if (computerMove === 'Paper') {
        result = 'You WIN!.';
    } else if (computerMove === 'Scissors') {
        result = 'Tie.'
    }
    
    alert(`Your move is Scissors and Computer is ${computerMove}. ${result}`);
}