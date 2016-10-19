// allow alerts:
/*jslint devel: true */




// create game
var gameContainer = document.getElementById('board');
var createBoard = function () {
    'use strict';
    var index, square;
    for (index = 0; index < 9; index += 1) {
        square = document.createElement('div');
        square.className = 'tile';

        // tile events
        square.addEventListener('click', function () {
            this.style.backgroundColor = 'yellow';
        });

        gameContainer.appendChild(square);
    }
};

createBoard();