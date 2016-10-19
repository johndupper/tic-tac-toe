// set counter
var playerTurn = 0;



function checkForWinner() {
    'use strict';
}


// assign colors per turn
function ChangeColor() {
    'use strict';
    
    if (this.classList.contains('free')) {
        this.classList.remove('free');
        
        if (playerTurn % 2 === 0) {
            this.style.backgroundColor = 'blue';
        } else {
            this.style.backgroundColor = 'red';
        }
        
        playerTurn += 1;
    }
}


// create game
var gameContainer = document.getElementById('board');

var createBoard = function () {
    'use strict';

    var index, square;
    for (index = 0; index < 9; index += 1) {
        square = document.createElement('div');
        square.className = 'tile free';
        square.id = index + 1;
        square.addEventListener('click', ChangeColor);
        gameContainer.appendChild(square);
    }
};

createBoard();