var playerTurn = 0;
var chosenSquare;
var playerOne = [];
var playerTwo = [];
var wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7]];


// win or tie
function declareWinner(blueArray, redArray) {
    'use strict';
}


// playing the game (constructor)
function GameLogic() {
    'use strict';
    chosenSquare = parseInt(this.id, 10);
    if (this.classList.contains('free')) {
        this.classList.remove('free');
        if (playerTurn % 2 === 0) {
            this.style.backgroundColor = 'blue';
            playerOne.push(chosenSquare);
        } else {
            this.style.backgroundColor = 'red';
            playerTwo.push(chosenSquare);
        }
        playerTurn += 1;
        chosenSquare = 0;
        playerOne.sort();
        playerTwo.sort();
    }
    if (playerTurn >= 5) {
        declareWinner(playerOne, playerTwo);
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
        square.addEventListener('click', GameLogic);
        gameContainer.appendChild(square);
    }
};
createBoard();