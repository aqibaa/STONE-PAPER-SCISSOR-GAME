let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessageElement = document.getElementById('result-message');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    playGame('rock');
});

paperButton.addEventListener('click', () => {
    playGame('paper');
});

scissorsButton.addEventListener('click', () => {
    playGame('scissors');
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    updateScores(result);
    updateResultMessage(result, playerChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    switch (playerChoice) {
        case 'rock':
            return computerChoice === 'scissors' ? 'player' : 'computer';
        case 'paper':
            return computerChoice === 'rock' ? 'player' : 'computer';
        case 'scissors':
            return computerChoice === 'paper' ? 'player' : 'computer';
    }
}

function updateScores(result) {
    if (result === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function updateResultMessage(result, playerChoice, computerChoice) {
    let message;

    switch (result) {
        case 'tie':
            message = `It's a tie! You both chose ${playerChoice}.`;
            break;
        case 'player':
            message = `You win! Your ${playerChoice} beats the computer's ${computerChoice}.`;
            break;
        case 'computer':
            message = `You lose! The computer's ${computerChoice} beats your ${playerChoice}.`;
            break;
    }

    resultMessageElement.textContent = message
}