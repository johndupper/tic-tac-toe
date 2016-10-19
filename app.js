
function ChangeColor() {
    'use strict';
    this.style.backgroundColor = 'yellow';
}


// create game
var gameContainer = document.getElementById('board');
var createBoard = function () {
    'use strict';
    var index, square;
    for (index = 0; index < 9; index += 1) {
        square = document.createElement('div');
        square.className = 'tile';
        // tile events
        square.addEventListener('click', ChangeColor);
        gameContainer.appendChild(square);
    }
};

createBoard();