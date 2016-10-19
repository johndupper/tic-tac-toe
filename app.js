// create game
var gameContainer = document.getElementById('board');

function alertMe() {
    'use strict';
}

var createBoard = function () {
    'use strict';
    var index, square;
    for (index = 0; index < 9; index += 1) {
        square = document.createElement('div');
        square.className = 'tile';
        square.addEventListener('click', alertMe);
        gameContainer.appendChild(square);
    }
};

createBoard();