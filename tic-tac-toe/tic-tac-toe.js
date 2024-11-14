let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(index) {
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    document.querySelectorAll(".cell")[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus();
}

function updateStatus() {
    if (gameActive) {
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    let roundWon = false;
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusDisplay.textContent = "It's a draw!";
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    updateStatus();
}
