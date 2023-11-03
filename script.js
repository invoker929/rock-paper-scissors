const gameContainer = document.querySelector(".game-container");
const playerText = document.querySelector(".player-text");
const computerText = document.querySelector(".computer-text");
const resultText = document.querySelector(".result-text");


gameContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target.tagName === "BUTTON") {
        let player = event.target.innerText;
        let computer = computerChoice();

        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner(player, computer);
    }
});


function computerChoice() {
    return ['ROCK', 'PAPER', 'SCISSORS'][Math.floor(Math.random() * 3)];
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw!';
    } else if (player === 'ROCK') {
        return computer === 'SCISSORS' ? 'You Win!' : 'You lose!';
    } else if (player === "PAPER") {
        return computer === 'ROCK' ? 'You Win!' : 'You lose!';
    } else if (player === 'SCISSORS') {
        return computer === 'PAPER' ? 'You Win!' : 'You lose!';
    }
}