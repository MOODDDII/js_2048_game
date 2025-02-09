'use strict';
const game = new Game();
const startButton = document.querySelector('.start');
const gameField = document.querySelector('.game-field');
const scoreDisplay = document.querySelector('.game-score');
const winMessage = document.querySelector('.message-win');
const loseMessage = document.querySelector('.message-lose');
const startMessage = document.querySelector('.message-start');
function renderBoard() {
    gameField.innerHTML = '';
    const field = game.getState();
    field.forEach((row)=>{
        const rowElement = document.createElement('tr');
        rowElement.classList.add('field-row');
        row.forEach((cell)=>{
            const cellElement = document.createElement('td');
            cellElement.classList.add('field-cell');
            if (cell !== 0) {
                cellElement.classList.add(`field-cell--${cell}`);
                cellElement.textContent = cell;
            }
            rowElement.appendChild(cellElement);
        });
        gameField.appendChild(rowElement);
    });
    scoreDisplay.textContent = game.getScore();
    if (game.getStatus() === 'win') {
        winMessage.classList.remove('hidden');
        loseMessage.classList.add('hidden');
        startMessage.classList.add('hidden');
    } else if (game.getStatus() === 'lose') {
        winMessage.classList.add('hidden');
        loseMessage.classList.remove('hidden');
        startMessage.classList.add('hidden');
    } else if (game.getStatus() === 'idle') {
        winMessage.classList.add('hidden');
        loseMessage.classList.add('hidden');
        startMessage.classList.remove('hidden');
    }
}
startButton.addEventListener('click', ()=>{
    if (game.getStatus() === 'idle' || game.getStatus() === 'win' || game.getStatus() === 'lose') {
        game.restart();
        renderBoard();
        startButton.textContent = 'Restart';
    }
});
document.addEventListener('keydown', (event)=>{
    if (game.getStatus() === 'playing') {
        if (event.key === 'ArrowLeft') game.moveLeft();
        else if (event.key === 'ArrowRight') game.moveRight();
        else if (event.key === 'ArrowUp') game.moveUp();
        else if (event.key === 'ArrowDown') game.moveDown();
        renderBoard();
    }
});
renderBoard();

//# sourceMappingURL=index.f75de5e1.js.map
