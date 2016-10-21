// variables
var playerTurn = 0;
var playerOne = [];
var playerTwo = [];
var wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7]];
var alert;

// reset game
function resetGame() {
    'use strict';
    var index, resetSquares;
    resetSquares = document.getElementsByClassName('tile');
    
    for (index = 0; index < resetSquares.length; index += 1) {
        resetSquares[index].className = 'tile free';
    }
    
    playerTurn = 0;
    playerOne = [];
    playerTwo = [];
}

// win or tie
function declareWinner() {
    'use strict';
    var index, playerOneCount, indexPlayerOne, playerTwoCount, indexPlayerTwo;
    
    for (index = 0; index < wins.length; index += 1) {

        playerOneCount = 0;
        for (indexPlayerOne = 0; indexPlayerOne < playerOne.length; indexPlayerOne += 1) {
            if (wins[index].indexOf(playerOne[indexPlayerOne]) > -1) {
                playerOneCount += 1;
            }
        }

        playerTwoCount = 0;
        for (indexPlayerTwo = 0; indexPlayerTwo < playerTwo.length; indexPlayerTwo += 1) {
            if (wins[index].indexOf(playerTwo[indexPlayerTwo]) > -1) {
                playerTwoCount += 1;
            }
        }

        if (playerOneCount === 3 || playerTwoCount === 3) {
            alert('You won! Congrats!');
            resetGame();
        }
    }
    
    if (playerTurn === 9) {
        alert('We have a tie! Try again?');
        resetGame();
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
            this.classList.add('blue');
            playerOne.push(chosenSquare);
        } else {
            this.classList.add('red');
            playerTwo.push(chosenSquare);
        }
        
        playerTurn += 1;
        chosenSquare = 0;
    }
    
    if (playerTurn >= 5) {
        declareWinner();
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