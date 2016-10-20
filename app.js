var playerTurn = 0;
var playerOne = [];
var playerTwo = [];
var wins = [[1, 5, 9], [3, 5, 7], [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9]];
var alert;

// win or tie
function declareWinner(blueArray, redArray) {
    'use strict';
    var index;
    
    for (index = 0; index < wins.length; index += 1) {
        
        if (playerOne.toString() === wins[index].toString()) {
            alert('winner');
        }
        if (playerTwo.toString() === wins[index].toString()) {
            alert('winner');
        }
    }
}

// playing the game (constructor)
function GameLogic() {
    'use strict';
    var chosenSquare;
    
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
    }
    if (playerTurn >= 5) {
        playerOne.sort();
        playerTwo.sort();
        declareWinner(playerOne, playerTwo);
    }
}

// create game
var createBoard = function () {
    'use strict';
    var name, gameContainer, index, square;
    
    name = document.createElement('h1');
    name.innerHTML = 'Tic Tac Toe';
    document.body.appendChild(name);
    
    gameContainer = document.createElement('div');
    gameContainer.className = 'board';
    document.body.appendChild(gameContainer);
    
    for (index = 0; index < 9; index += 1) {
        square = document.createElement('div');
        square.className = 'tile free';
        square.id = index + 1;
        square.addEventListener('click', GameLogic);
        gameContainer.appendChild(square);
    }
};

createBoard();